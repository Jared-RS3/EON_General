import React, { useEffect, useRef, useState } from 'react';

// Shared animation helpers used across the site. Everything here degrades to a
// static, fully visible page when the visitor prefers reduced motion.

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// One IntersectionObserver per option set, shared by every element using it.
const observers = new Map();

function observe(element, callback, { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const key = `${threshold}|${rootMargin}`;
  let entry = observers.get(key);

  if (!entry) {
    const callbacks = new Map();
    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          const cb = callbacks.get(item.target);
          if (cb) cb(item);
        });
      },
      { threshold, rootMargin }
    );
    entry = { observer, callbacks };
    observers.set(key, entry);
  }

  entry.callbacks.set(element, callback);
  entry.observer.observe(element);

  return () => {
    entry.callbacks.delete(element);
    entry.observer.unobserve(element);
  };
}

// Returns true once the element has scrolled into view, and stays true.
export function useInView(ref, options) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    let stop = null;
    stop = observe(
      element,
      (item) => {
        if (item.isIntersecting) {
          setInView(true);
          if (stop) stop();
        }
      },
      options
    );

    return () => stop && stop();
    // Options are static per call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return inView;
}

// Fades/slides its children in when scrolled into view.
// variant: "up" (default) | "fade" | "clip" | "scale" | "left"
export function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {/* The clip goes on an inner layer: a fully clipped element never
          registers as intersecting, so it could never be revealed. */}
      {variant === 'clip' ? <div className="reveal-clip-inner">{children}</div> : children}
    </Tag>
  );
}

// Per-letter "roll" used on buttons and nav links: the label slides up and an
// identical copy rolls in from below on hover.
export function RollText({ children }) {
  const text = String(children);
  const letters = Array.from(text);

  const renderRow = (hidden) => (
    <span className="roll-row" aria-hidden={hidden || undefined}>
      {letters.map((char, i) => (
        <span className="roll-char" style={{ '--i': i }} key={i}>
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  );

  return (
    <span className="roll">
      <span className="sr-only">{text}</span>
      {renderRow(true)}
      {renderRow(true)}
    </span>
  );
}

// Calls `callback` on every animation frame while the page scrolls or resizes.
export function useScrollFrame(callback, deps = []) {
  const savedCallback = useRef(callback);
  savedCallback.current = callback;

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let frame = null;
    const run = () => {
      frame = null;
      savedCallback.current();
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(run);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// Paragraph whose words darken one by one as it scrolls through the viewport.
export function WordReveal({ as: Tag = 'p', text, className = '' }) {
  const ref = useRef(null);
  const words = text.split(' ');
  const [lit, setLit] = useState(() => (prefersReducedMotion() ? words.length : 0));

  useScrollFrame(() => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const vh = window.innerHeight;
    // Starts when the top of the text reaches 85% of the viewport and completes
    // as its bottom passes 45%.
    const start = vh * 0.85;
    const end = vh * 0.45;
    const total = rect.height + (start - end);
    const progress = Math.min(1, Math.max(0, (start - rect.top) / total));
    const next = Math.round(progress * words.length);

    setLit((current) => (current === next ? current : next));
  }, [words.length]);

  return (
    <Tag ref={ref} className={`word-reveal ${className}`}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className={i < lit ? 'is-lit' : undefined}>
          {word}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

// Odometer-style number: each digit spins through a column of numerals and
// settles on its value when the counter scrolls into view.
export function Odometer({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.4 });
  const digits = Array.from(String(value));
  const cycle = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Two full turns before the final digit so every column visibly rolls.
  const column = [...cycle, ...cycle, ...cycle];

  return (
    <span ref={ref} className={`odometer${inView ? ' is-in' : ''}`}>
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
      {prefix && <span className="odometer-affix" aria-hidden="true">{prefix}</span>}
      {digits.map((digit, i) => {
        const index = /\d/.test(digit) ? 20 + Number(digit) : 0;
        return /\d/.test(digit) ? (
          <span className="odometer-digit" aria-hidden="true" key={i}>
            <span
              className="odometer-column"
              style={{
                '--target': index,
                '--delay': `${i * 120}ms`
              }}
            >
              {column.map((n, j) => (
                <span key={j}>{n}</span>
              ))}
            </span>
            <span className="odometer-sizer">{digit}</span>
          </span>
        ) : (
          <span className="odometer-affix" aria-hidden="true" key={i}>{digit}</span>
        );
      })}
      {suffix && <span className="odometer-affix odometer-suffix" aria-hidden="true">{suffix}</span>}
    </span>
  );
}

// Small inline line icons, matching the thin-stroke style of the design.
const iconPaths = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  boxes: (
    <>
      <path d="M3 13h8v8H3zM13 13h8v8h-8zM8 3h8v8H8z" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8a2.8 2.8 0 0 1-4-4l8-8-1.3-1.3a4 4 0 0 0-5-5l2.6 2.6-1.4 3.5-3.5 1.4L5.8 7.6" />,
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z" />
      <path d="m8.8 12 2.2 2.2 4.4-4.4" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2.2-1-1 .9a5 5 0 0 1-2.4-2.4l.9-1-1-2.2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  play: <path d="M8 5v14l11-7z" />
};

export function Icon({ name, size = 20, strokeWidth = 1.5, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {iconPaths[name]}
    </svg>
  );
}

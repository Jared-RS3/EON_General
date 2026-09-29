import React, { useRef } from 'react';
import { Icon, useInView } from '../lib/motion';
import { company } from '../data/company';

const wordmark = 'EON GENERAL';

function Footer() {
  const markRef = useRef(null);
  const markIn = useInView(markRef, { threshold: 0.3 });

  return (
    <footer className="footer" data-theme="dark">
      <div className="container">
        <div ref={markRef} className={`footer-mark${markIn ? ' is-in' : ''}`} aria-hidden="true">
          {Array.from(wordmark).map((char, i) => (
            <span style={{ '--i': i }} key={i}>{char === ' ' ? ' ' : char}</span>
          ))}
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-tagline">Quality parts, reliable service.</p>
            <p className="footer-sub">
              Your trusted partner for industrial and automotive supply solutions across South Africa.
            </p>
            <p className="footer-label">Certified</p>
            <ul className="footer-badges">
              <li>B-BBEE Level 1 Contributor</li>
              <li>100% Youth, Woman &amp; Black Owned</li>
            </ul>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <p className="footer-label">Navigation</p>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#brands">Brands</a></li>
            </ul>
          </nav>

          <div className="footer-col">
            <p className="footer-label">Company</p>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Request a Quote</a></li>
              <li><a href="#/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col footer-office">
            <p className="footer-label">Head Office</p>
            <address>
              {company.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.phoneHref}>{company.phoneDisplay}</a>
            <div className="footer-social">
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" size={18} />
              </a>
              <a href={company.phoneHref} aria-label="Call us">
                <Icon name="phone" size={18} />
              </a>
              <a href={`mailto:${company.email}`} aria-label="Email us">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {company.legalName}</p>
          <p>Reg No. {company.regNo}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

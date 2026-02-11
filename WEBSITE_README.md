# EON General Supply Company Website

A modern, professional website for EON General Supply Company - your trusted partner for industrial and automotive parts supply in South Africa.

## 🌟 Features

### Complete Website Sections
1. **Homepage** - Hero section with company highlights and CTAs
2. **About Us** - Company background, mission, vision, values, and certifications
3. **Products** - Comprehensive product categories with detailed descriptions
4. **Services** - Custom parts sourcing, bulk supply, and refurbishment services
5. **Industries** - Industrial and automotive sectors we serve
6. **Brands** - Extensive list of supported vehicle and equipment brands
7. **Why Choose Us** - Key differentiators and company strengths
8. **Request a Quote** - Interactive quote request form with file upload
9. **Contact Us** - Contact form, business information, and map integration

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Interactive mobile menu
- ✅ Form validation
- ✅ Animated elements on scroll
- ✅ Success message notifications
- ✅ Scroll-to-top button
- ✅ Active navigation highlighting
- ✅ Modern gradient designs
- ✅ Professional color scheme
- ✅ Font Awesome icons integration
- ✅ SEO-friendly structure

### Design Highlights
- Modern blue and gold color scheme
- Clean, professional layouts
- Card-based UI components
- Smooth animations and transitions
- Consistent typography
- Accessible design patterns

## 📁 Project Structure

```
EON_General/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── assets/             # Assets directory
│   └── images/         # Images folder
├── README.md           # Project documentation
└── WEBSITE_README.md   # This file
```

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. No build process required - pure HTML, CSS, and JavaScript
3. All resources are loaded via CDN (Font Awesome)

### Local Development
```bash
# Option 1: Use Python's built-in server
python -m http.server 8000

# Option 2: Use Node.js http-server
npx http-server

# Option 3: Use PHP's built-in server
php -S localhost:8000

# Then open: http://localhost:8000
```

## 📝 Customization Guide

### 1. Update Company Information

**Contact Details** (in `index.html`):
- Search for placeholder phone numbers: `+27 82 891 2818`
- Replace placeholder emails: `eongeneral01@gmail.com`
- Update physical address in the contact section

### 2. Add Google Maps Integration

Replace the map placeholder in the Contact section:
```html
<div class="map-container">
    <iframe 
        src="YOUR_GOOGLE_MAPS_EMBED_URL"
        width="100%" 
        height="400" 
        style="border:0; border-radius: 10px;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

### 3. Add Company Logo

Replace the text logo in the navigation:
```html
<div class="logo">
    <img src="assets/images/logo.png" alt="EON General Supply Co." style="height: 50px;">
</div>
```

### 4. Add Images

Place images in `assets/images/` and update references:
- Hero background: Add to hero section
- Product images: Add to product cards
- Brand logos: Add to brands section
- About us photos: Add to about section

### 5. Customize Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a5490;      /* Main blue */
    --secondary-color: #f39c12;    /* Gold/Orange */
    --accent-color: #e74c3c;       /* Red accent */
    --dark-color: #2c3e50;         /* Dark blue-grey */
    --light-color: #ecf0f1;        /* Light grey */
}
```

### 6. Form Backend Integration

The forms currently log to console. To integrate with a backend:

**Quote Form** (in `script.js`):
```javascript
async function sendQuoteRequest(formData) {
    try {
        const response = await fetch('/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

**Contact Form**:
```javascript
async function sendContactMessage(formData) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### 7. Add More Brands

Edit the brands section in `index.html`:
```html
<div class="brand-item">Your Brand Name</div>
```

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1a5490` | Headers, key elements |
| Secondary Gold | `#f39c12` | Accents, CTAs |
| Dark | `#2c3e50` | Footer, text |
| Light | `#ecf0f1` | Backgrounds |
| White | `#ffffff` | Cards, clean spaces |

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Laptop**: 968px - 1199px
- **Tablet**: 768px - 967px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer 11 (basic support)

## 📊 Performance Optimization

Current optimizations:
- Minimized dependencies (only Font Awesome CDN)
- CSS animations with GPU acceleration
- Intersection Observer for scroll animations
- Lazy loading support for images
- Efficient JavaScript event handling

Future optimizations:
- Compress and optimize images
- Implement service worker for caching
- Minify CSS and JavaScript for production
- Use image CDN for faster loading
- Implement critical CSS

## 🔐 Security Considerations

When deploying to production:
1. Implement CSRF protection on forms
2. Sanitize all user inputs server-side
3. Use HTTPS for all communications
4. Implement rate limiting on form submissions
5. Add reCAPTCHA to prevent spam
6. Validate file uploads (type, size, content)

## 📧 Email Setup Recommendations

For form submissions, consider:
- **FormSpree**: Simple form backend
- **EmailJS**: Client-side email sending
- **SendGrid**: Professional email API
- **Mailgun**: Developer-friendly email service
- **Custom Backend**: PHP, Node.js, Python

## 🌍 SEO Recommendations

1. **Add Meta Tags**:
```html
<meta name="description" content="EON General Supply Company - Quality industrial and automotive parts in South Africa. B-BBEE Level 1 Contributor.">
<meta name="keywords" content="industrial parts, automotive parts, South Africa, B-BBEE, bulk supply">
<meta property="og:title" content="EON General Supply Company">
<meta property="og:description" content="Your trusted partner for quality parts">
<meta property="og:image" content="URL_TO_SHARE_IMAGE">
```

2. **Add Structured Data**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EON General Supply Company",
  "description": "Industrial and automotive parts supplier",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ZA"
  }
}
</script>
```

3. **Create sitemap.xml**
4. **Add robots.txt**
5. **Optimize images with alt tags**
6. **Use descriptive URLs when deploying**

## 📦 Deployment Options

### Static Hosting (Recommended for this project)
1. **Netlify** - Drag and drop deployment
2. **Vercel** - Automatic deployments from Git
3. **GitHub Pages** - Free hosting for repositories
4. **AWS S3 + CloudFront** - Scalable solution
5. **Firebase Hosting** - Google's hosting solution

### Traditional Hosting
1. **Shared Hosting** - cPanel/Plesk
2. **VPS** - More control and resources
3. **Dedicated Server** - Maximum performance

## 🤝 Support & Maintenance

### Regular Updates Needed
- Update contact information
- Add new brands and products
- Update certifications and achievements
- Refresh testimonials (when added)
- Update business hours and services

### Monthly Checks
- Test all forms
- Check all links
- Verify mobile responsiveness
- Review analytics
- Update content as needed

## 📞 Website Contact Information

Current placeholder information to update:
- Phone: `+27 82 891 2818`
- Email: `eongeneral01@gmail.com`
- Address: `Street Address, City, Province, Postal Code, South Africa`

## 🎯 Future Enhancements

Potential features to add:
- [ ] Customer testimonials section
- [ ] Product catalog with search
- [ ] Online ordering system
- [ ] User account system
- [ ] Live chat support
- [ ] Blog/News section
- [ ] Gallery of completed projects
- [ ] Newsletter signup
- [ ] Multi-language support (English/Afrikaans)
- [ ] Integration with inventory system

## 📄 License

© 2026 EON General Supply Company. All rights reserved.

## 👨‍💻 Development Notes

- Built with vanilla HTML, CSS, and JavaScript
- No framework dependencies for maximum compatibility
- Mobile-first responsive design approach
- Accessibility considerations included
- Performance-optimized animations
- Clean, maintainable code structure

---

**Last Updated**: February 2026
**Version**: 1.0.0
**Status**: Ready for Production (after customization)

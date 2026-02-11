# Image Assets Guide

This folder contains all image assets for the EON General Supply Company website.

## 📁 Recommended Images to Add

### 1. Logo
- **Filename**: `logo.png` or `logo.svg`
- **Dimensions**: 200x50px (or higher resolution)
- **Format**: PNG with transparency or SVG
- **Usage**: Navigation bar
- **Alt text**: "EON General Supply Company Logo"

### 2. Hero Section
- **Filename**: `hero-bg.jpg`
- **Dimensions**: 1920x1080px minimum
- **Format**: JPG (optimized)
- **Usage**: Background image for hero section
- **Content**: Industrial/automotive machinery, trucks, or equipment

### 3. About Section
- **Filename**: `team.jpg` or `company-office.jpg`
- **Dimensions**: 800x600px
- **Format**: JPG
- **Usage**: About us section
- **Content**: Team photo, office, or facility

### 4. Certification Images
- **Filenames**: 
  - `bbee-certificate.png`
  - `quality-certification.png`
- **Dimensions**: 400x400px
- **Format**: PNG
- **Usage**: About us certifications display

### 5. Product Category Images
Add images for each product category:
- `engine-components.jpg`
- `filters-fluids.jpg`
- `electrical-systems.jpg`
- `cooling-systems.jpg`
- `brake-systems.jpg`
- `general-parts.jpg`

**Specifications**:
- Dimensions: 600x400px
- Format: JPG (optimized)
- Content: Representative parts for each category

### 6. Service Images
- `parts-sourcing.jpg`
- `bulk-supply.jpg`
- `engine-refurbishment.jpg`

**Specifications**:
- Dimensions: 800x600px
- Format: JPG
- Content: Service process or completed work

### 7. Industry Images
- `industrial-sector.jpg` - Heavy machinery, construction equipment
- `automotive-sector.jpg` - Trucks, commercial vehicles

**Specifications**:
- Dimensions: 1000x700px
- Format: JPG

### 8. Brand Logos
Create a `brands/` subfolder with logos:
- `scania.png`
- `volvo.png`
- `mercedes.png`
- `man.png`
- `caterpillar.png`
- (etc.)

**Specifications**:
- Dimensions: 200x100px
- Format: PNG with transparency
- Background: Transparent
- All logos should be uniform in size

### 9. Favicon
- **Filename**: `favicon.ico` (place in root directory)
- **Dimensions**: 16x16px, 32x32px, 48x48px (multi-size)
- **Format**: ICO
- **Content**: EON logo or "E" symbol

## 🎨 Image Optimization Guidelines

### Before Adding Images:
1. **Compress** - Use tools like TinyPNG, ImageOptim, or Squoosh
2. **Resize** - Match recommended dimensions
3. **Format** - Use JPG for photos, PNG for logos/transparency, SVG for icons
4. **Quality** - Balance between quality and file size (70-85% for web)

### Optimization Tools:
- **Online**: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **Command line**: `imagemagick`, `jpegoptim`, `optipng`

### Target File Sizes:
- Hero images: < 500KB
- Product images: < 200KB
- Logos: < 50KB
- Icons: < 20KB

## 📝 How to Add Images to Website

### 1. Add Logo to Navigation:
```html
<div class="logo">
    <img src="assets/images/logo.png" alt="EON General Supply Company">
</div>
```

### 2. Add Hero Background:
```css
.hero {
    background-image: url('assets/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

### 3. Add Product Images:
```html
<div class="product-card">
    <img src="assets/images/engine-components.jpg" alt="Engine Components">
    <h3>Engine Components</h3>
    <p>Complete range of engine parts...</p>
</div>
```

### 4. Add Brand Logos:
```html
<div class="brand-item">
    <img src="assets/images/brands/scania.png" alt="Scania">
</div>
```

### 5. Add Favicon to HTML:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
```

## 🖼️ Stock Photo Resources

If you need placeholder or stock images:

### Free Stock Photos:
- [Unsplash](https://unsplash.com/) - High-quality free images
- [Pexels](https://pexels.com/) - Free stock photos and videos
- [Pixabay](https://pixabay.com/) - Free images and videos
- [Freepik](https://freepik.com/) - Free vectors and photos

### Search Terms:
- "industrial machinery"
- "truck parts"
- "automotive workshop"
- "heavy equipment"
- "construction equipment"
- "truck fleet"
- "industrial warehouse"
- "manufacturing plant"

### Paid Stock Photos:
- [Shutterstock](https://shutterstock.com/)
- [Getty Images](https://gettyimages.com/)
- [Adobe Stock](https://stock.adobe.com/)

## 📐 Image Dimensions Quick Reference

| Usage | Dimensions | Format | Max Size |
|-------|-----------|--------|----------|
| Logo | 200x50px | PNG/SVG | 50KB |
| Hero BG | 1920x1080px | JPG | 500KB |
| Product | 600x400px | JPG | 200KB |
| Service | 800x600px | JPG | 200KB |
| Brand Logo | 200x100px | PNG | 50KB |
| Favicon | 32x32px | ICO/PNG | 10KB |

## ✅ Image Checklist

Before adding images to production:
- [ ] All images compressed and optimized
- [ ] Correct dimensions for responsive display
- [ ] All images have descriptive alt text
- [ ] File names are descriptive and lowercase
- [ ] Use hyphens for spaces (not underscores)
- [ ] Images are in correct format (JPG/PNG/SVG)
- [ ] Test images on different devices
- [ ] Check loading speed

## 🔄 Lazy Loading Implementation

For better performance, add lazy loading to images:

```html
<img data-src="assets/images/product.jpg" 
     alt="Product Name" 
     class="lazy"
     loading="lazy">
```

The website JavaScript already includes lazy loading support!

## 📱 Responsive Images

For different screen sizes, consider using:

```html
<picture>
    <source media="(max-width: 768px)" srcset="assets/images/hero-mobile.jpg">
    <source media="(max-width: 1200px)" srcset="assets/images/hero-tablet.jpg">
    <img src="assets/images/hero-desktop.jpg" alt="Hero Image">
</picture>
```

## 🎯 Brand Identity Colors

When creating or editing images, use these brand colors:
- Primary Blue: `#1a5490`
- Secondary Gold: `#f39c12`
- Accent Red: `#e74c3c`
- Dark: `#2c3e50`
- Light: `#ecf0f1`

---

**Note**: Currently, the website uses Font Awesome icons as placeholders. Once you add actual images, the visual appeal will be significantly enhanced!

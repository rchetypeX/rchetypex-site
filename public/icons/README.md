# Social Media Icons

This directory contains placeholder SVG icons for social media platforms. These are designed with the CRT aesthetic to match your site's theme.

## Current Icons

- `x.svg` - X (Twitter) placeholder
- `instagram.svg` - Instagram camera placeholder
- `facebook.svg` - Facebook "F" placeholder
- `tiktok.svg` - TikTok musical note placeholder
- `linkedin.svg` - LinkedIn "in" placeholder

## How to Replace

1. **Keep the same filename** - The site references these exact filenames
2. **Maintain 24x24 viewBox** - Keep the `viewBox="0 0 24 24"` attribute
3. **Use CRT colors** - Replace with your brand colors while maintaining the green phosphor aesthetic
4. **Add glow effects** - Include `filter="drop-shadow(0 0 2px rgba(140, 255, 160, 0.5))"` for consistency

## Example Replacement

```svg
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="your-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#C8FFB8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9FE6A0;stop-opacity:0.8" />
    </linearGradient>
  </defs>
  
  <!-- Your icon content here -->
  <path d="..." 
        fill="url(#your-glow)" 
        filter="drop-shadow(0 0 2px rgba(140, 255, 160, 0.5))"/>
</svg>
```

## Tips

- Use vector graphics (SVG) for crisp scaling
- Keep file sizes under 2KB for performance
- Test on both light and dark backgrounds
- Ensure good contrast for accessibility

# Cyberpunk 2077 x Displate Code Redemption Page

## Project Overview
A landing page for redeeming Cyberpunk 2077 x Displate collaboration codes, featuring an AR experience for iOS devices.

## Project Structure
```
LOTR EXP/
├── index.html              # Main HTML file
├── styles.css             # CSS styles
├── assets/
│   ├── logos/
│   │   ├── Cyberpunk_logo.svg
│   │   ├── Displate_logo.svg
│   │   ├── FI.jpg
│   │   └── FI-removebg-preview.png
│   ├── porsche_911_turbo_930_johnny_silverhands.glb    # 3D model (source)
│   └── Porsche_911_turbo_930_Johnny_Silverhands.usdz   # iOS AR model
└── README.md
```

## Important Details

### Repository
- **URL**: https://github.com/nicolapaganelli/redeemdisp.git
- **Live Site**: https://nicolapaganelli.github.io/redeemdisp/

### Redemption Code
```
DN6JGM5F-JHMQ-INO4-O581-0VWB2XQSX3
```

### Assets Information
- **Logos**:
  - Cyberpunk logo: Yellow SVG format
  - Displate logo: White PNG with transparent background (FI-removebg-preview.png)
- **3D Models**:
  - Source GLB file: 30MB
  - iOS USDZ file: 13MB

### Mobile Breakpoints
- Tablet: 768px
- Mobile: 480px

### Features
1. **Responsive Design**
   - Mobile-first approach
   - iOS Safari height fix
   - Touch-friendly inputs

2. **AR Experience**
   - iOS Quick Look integration
   - Triggered on code redemption
   - Johnny Silverhand's Porsche 911 3D model

3. **UI Elements**
   - Language selector (🇺🇸 EN, 🇷🇺 RU, 🇩🇪 DE)
   - Code input field
   - Redemption button
   - Partner logos section
   - Footer with links

### Color Scheme
```css
:root {
    --cyberpunk-yellow: #fcee0a;
    --cyberpunk-blue: #00ffff;
}
```

### Dependencies
- No external JavaScript libraries
- Uses native iOS AR Quick Look

### Browser Support
- Modern browsers (Chrome, Firefox, Safari)
- iOS Safari for AR features
- Minimum iOS version: 12.0 (for AR Quick Look)

## Development Notes

### Local Development
1. Clone repository:
```bash
git clone https://github.com/nicolapaganelli/redeemdisp.git
cd redeemdisp
```

2. File locations:
```
/Users/nicola.paganelli/Desktop/Apps/LOTR EXP/
```

### Deployment
- Hosted on GitHub Pages
- Main branch is used for deployment
- Auto-deploys on push to main

### AR Implementation
1. Source 3D model: .glb format
2. iOS AR model: .usdz format
3. Implementation:
```html
<a id="ar-link" rel="ar" href="assets/Porsche_911_turbo_930_Johnny_Silverhands.usdz">
    <!-- AR content -->
</a>
```

## Maintenance Notes
- Keep 3D models in sync (GLB and USDZ)
- Test AR experience on actual iOS devices
- Verify responsive design on different devices
- Maintain correct file paths for assets

## Future Improvements
1. Add loading states for AR content
2. Implement code validation
3. Add more language options
4. Enhance AR preview on non-iOS devices
5. Add social sharing capabilities 
import sharp from 'sharp';
import fs from 'fs';

async function main() {
  const input = 'public/images/pr-vision-logo.jpg';
  
  // Ensure directories exist
  const dirs = [
    'public/assets',
    'public/images',
    'src/assets/images'
  ];
  for (const d of dirs) {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  }

  // 1. Copy full master logo to all standard asset locations
  fs.copyFileSync(input, 'public/assets/pr-vision-logo.jpg');
  fs.copyFileSync(input, 'public/assets/logo.jpg');
  fs.copyFileSync(input, 'src/assets/images/pr-vision-logo.jpg');

  const meta = await sharp(input).metadata();
  console.log('Image dimensions:', meta.width, 'x', meta.height);

  // 2. Focused full logo lockup (3D PR mark + PR VISION INNOVATIONS + tagline):
  await sharp(input)
    .extract({ left: 160, top: 60, width: 704, height: 535 })
    .png({ quality: 95 })
    .toFile('public/images/pr-vision-logo-lockup.png');

  fs.copyFileSync('public/images/pr-vision-logo-lockup.png', 'public/assets/pr-vision-logo-lockup.png');

  // 3. Compact horizontal logo lockup (3D PR mark + "PR VISION INNOVATIONS" without outer dark padding):
  await sharp(input)
    .extract({ left: 180, top: 80, width: 664, height: 440 })
    .png({ quality: 95 })
    .toFile('public/images/pr-vision-logo-compact.png');

  fs.copyFileSync('public/images/pr-vision-logo-compact.png', 'public/assets/pr-vision-logo-compact.png');

  // 4. Iconic 3D "PR" emblem mark alone (square for favicon, avatars, and mobile logo mark):
  await sharp(input)
    .extract({ left: 295, top: 45, width: 435, height: 410 })
    .resize(256, 256, { fit: 'contain', background: { r: 5, g: 8, b: 22, alpha: 1 } })
    .png()
    .toFile('public/images/pr-vision-logo-mark.png');

  fs.copyFileSync('public/images/pr-vision-logo-mark.png', 'public/assets/pr-vision-logo-mark.png');

  // 5. Generate Favicons: 64x64, 180x180 (apple touch), 32x32
  await sharp('public/images/pr-vision-logo-mark.png')
    .resize(64, 64)
    .png()
    .toFile('public/favicon.png');

  await sharp('public/images/pr-vision-logo-mark.png')
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // 6. Generate SVG favicon wrapper embedding the official emblem
  const markBase64 = fs.readFileSync('public/images/pr-vision-logo-mark.png').toString('base64');
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <clipPath id="squircle">
      <rect width="128" height="128" rx="26" />
    </clipPath>
  </defs>
  <rect width="128" height="128" rx="26" fill="#050816" stroke="#2879FF" stroke-width="2.5" stroke-opacity="0.5" />
  <g clip-path="url(#squircle)">
    <image href="data:image/png;base64,${markBase64}" width="128" height="128" />
  </g>
</svg>`;
  fs.writeFileSync('public/favicon.svg', faviconSvg);
  fs.writeFileSync('public/logo.svg', faviconSvg);

  console.log('Processed official logo variants successfully!');
}

main().catch(console.error);

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
  console.log('Original image dimensions:', meta.width, 'x', meta.height);

  // 2. Focused full logo lockup (3D PR mark + PR VISION INNOVATIONS):
  await sharp(input)
    .extract({ left: 160, top: 40, width: 704, height: 535 })
    .png({ quality: 95 })
    .toFile('public/images/pr-vision-logo-lockup.png');

  fs.copyFileSync('public/images/pr-vision-logo-lockup.png', 'public/assets/pr-vision-logo-lockup.png');

  // 3. Compact horizontal logo lockup
  await sharp(input)
    .extract({ left: 180, top: 40, width: 664, height: 480 })
    .png({ quality: 95 })
    .toFile('public/images/pr-vision-logo-compact.png');

  fs.copyFileSync('public/images/pr-vision-logo-compact.png', 'public/assets/pr-vision-logo-compact.png');

  // 4. Iconic 3D "PR" emblem mark (full unclipped bounds, transparent background, natural proportions)
  // Left: 210, Top: 24, Width: 536, Height: 408 (aspect ratio ~1.314)
  const left = 210;
  const top = 24;
  const width = 536;
  const height = 408;

  const cropped = sharp(input).extract({ left, top, width, height });
  const { data, info } = await cropped.raw().toBuffer({ resolveWithObject: true });

  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    const brightness = Math.max(r, g, b);

    let a = 0;
    if (brightness <= 15) {
      a = 0;
    } else if (brightness >= 50) {
      a = 255;
    } else {
      const t = (brightness - 15) / (50 - 15);
      a = Math.round(t * t * (3 - 2 * t) * 255);
    }

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = a;
  }

  // Create crisp 2x resolution mark (1072x816) for high-DPI displays
  const markBuffer = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize(1072, 816, { kernel: 'lanczos3' })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync('public/images/pr-vision-logo-mark.png', markBuffer);
  fs.writeFileSync('public/assets/pr-vision-logo-mark.png', markBuffer);
  fs.writeFileSync('src/assets/images/pr-vision-logo-mark.png', markBuffer);

  // 5. Generate Favicons: 64x64, 180x180 (apple touch) with clean fit:contain
  await sharp(markBuffer)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/favicon.png');

  await sharp(markBuffer)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/apple-touch-icon.png');

  // 6. Generate SVG favicon wrapper embedding the official emblem
  const markBase64 = markBuffer.toString('base64');
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <defs>
    <clipPath id="squircle">
      <rect width="128" height="128" rx="28" />
    </clipPath>
  </defs>
  <rect width="128" height="128" rx="28" fill="#050816" stroke="#2879FF" stroke-width="2" stroke-opacity="0.6" />
  <g clip-path="url(#squircle)">
    <image href="data:image/png;base64,${markBase64}" x="12" y="18" width="104" height="92" preserveAspectRatio="xMidYMid meet" />
  </g>
</svg>`;
  fs.writeFileSync('public/favicon.svg', faviconSvg);
  fs.writeFileSync('public/logo.svg', faviconSvg);

  console.log('Successfully regenerated all official PR VISION logo variants with unclipped proportions and transparency!');
}

main().catch(console.error);

import sharp from 'sharp';
import fs from 'fs';

async function updateFavicon() {
  const input = 'public/assets/pr-vision-logo.jpg';
  
  await sharp(input)
    .resize(64, 64, { fit: 'contain', background: { r: 5, g: 8, b: 22, alpha: 1 } })
    .png()
    .toFile('public/favicon.png');
    
  await sharp(input)
    .resize(180, 180, { fit: 'contain', background: { r: 5, g: 8, b: 22, alpha: 1 } })
    .png()
    .toFile('public/apple-touch-icon.png');
    
  const b64 = fs.readFileSync(input).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <rect width="128" height="128" rx="24" fill="#050816" />
  <image href="data:image/jpeg;base64,${b64}" x="0" y="0" width="128" height="128" preserveAspectRatio="xMidYMid meet" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', svg);
  fs.writeFileSync('public/logo.svg', svg);
  console.log('Favicons updated directly from original logo!');
}

updateFavicon().catch(console.error);


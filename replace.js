const fs = require('fs');
const path = require('path');

const files_to_check = [
    'index.html',
    'lokasi-paintball-terbaik-di-gemilang-katun.html',
    'manfaat-outbound-untuk-team-building-perusahaan.html',
    'peralatan-standar-paintball-yang-wajib-anda-ketahui.html',
    'strategi-jitu-menang-paintball-outbound.html',
    'tips-persiapan-sebelum-bermain-paintball-bagi-pemula.html',
    'assets/css/style.css'
];

const images = [
    'Paket Outbound Batu Malang (10).JPG',
    'Paket Outbound Batu Malang (11).JPG',
    'Paket Outbound Batu Malang (13).JPG',
    'Paket Outbound Batu Malang (15).JPG',
    'Paket Outbound Batu Malang (20).JPG',
    'Paket Outbound Batu Malang (21).JPG',
    'Paket Outbound Batu Malang (22).JPG',
    'Paket Outbound Batu Malang (23).JPG',
    'Paket Outbound Batu Malang (24).JPG',
    'Paket Outbound Batu Malang (3).JPG',
    'Paket Outbound Batu Malang (32).JPG',
    'Paket Outbound Batu Malang (5).JPG',
    'Paket Outbound Batu Malang (6).JPG',
    'Paket Outbound Batu Malang (63).JPG',
    'Paket Outbound Batu Malang (7)(1).JPG',
    'Paket Outbound Batu Malang (7).JPG',
    'Paket Outbound Batu Malang (9).JPG',
    'Paket Outbound Batu Malang (95).JPG',
    'Paket Outbound Batu Malang (96).JPG',
    'Paket Outbound Batu Malang (98).JPG'
];

for (const file of files_to_check) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = content.replace(/https:\/\/images\.unsplash\.com\/[^\s"'()]+/g, () => {
            return images[Math.floor(Math.random() * images.length)].split(' ').join('%20');
        });
        content = content.replace(/https:\/\/placehold\.co\/[^\s"'()]+/g, () => {
            return images[Math.floor(Math.random() * images.length)].split(' ').join('%20');
        });
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Replaced in ${file}`);
    }
}

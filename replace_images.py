import os
import re
import random

files_to_check = [
    'index.html',
    'lokasi-paintball-terbaik-di-gemilang-katun.html',
    'manfaat-outbound-untuk-team-building-perusahaan.html',
    'peralatan-standar-paintball-yang-wajib-anda-ketahui.html',
    'strategi-jitu-menang-paintball-outbound.html',
    'tips-persiapan-sebelum-bermain-paintball-bagi-pemula.html',
    'assets/css/style.css'
]

images = [
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
]

random.seed(42)

for filename in files_to_check:
    filepath = os.path.join('.', filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replace_url(match):
        img_name = random.choice(images)
        # return properly spaced string
        return img_name

    pattern_unsplash = r'https://images\.unsplash\.com/[^\s"\'\)]+'
    pattern_placehold = r'https://placehold\.co/[^\s"\'\)]+'
    
    new_content = re.sub(pattern_unsplash, replace_url, content)
    new_content = re.sub(pattern_placehold, replace_url, new_content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Done replacing images.")

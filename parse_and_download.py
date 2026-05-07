import re
import os
import subprocess

log_file = "/tmp/gdown_output.log"
output_base = "/Users/shreyaash/Desktop/Navigo/Nihira Jewels/public/images/drive"

with open(log_file, "r") as f:
    lines = f.readlines()

current_folder = "root"
downloads = []

for line in lines:
    line = line.strip()
    if line.startswith("Retrieving folder"):
        # Format: Retrieving folder ID NAME
        parts = line.split(" ", 3)
        if len(parts) >= 4:
            current_folder = parts[3]
    elif line.startswith("Processing file"):
        # Format: Processing file ID NAME
        parts = line.split(" ", 3)
        if len(parts) >= 4:
            file_id = parts[2]
            file_name = parts[3]
            downloads.append((current_folder, file_id, file_name))

os.makedirs(output_base, exist_ok=True)

success_count = 0
for folder, file_id, file_name in downloads:
    folder_path = os.path.join(output_base, folder)
    os.makedirs(folder_path, exist_ok=True)
    file_path = os.path.join(folder_path, file_name)
    
    if os.path.exists(file_path):
        success_count += 1
        continue
        
    print(f"Downloading {file_name} into {folder}...")
    url = f"https://drive.google.com/uc?id={file_id}"
    cmd = ["gdown", url, "-O", file_path, "--quiet"]
    res = subprocess.run(cmd)
    if res.returncode == 0:
        success_count += 1
    else:
        print(f"Failed to download {file_name}")

print(f"Successfully downloaded {success_count} / {len(downloads)} files.")

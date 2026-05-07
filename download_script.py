import gdown
import os

url = "https://drive.google.com/drive/folders/1Xd9_OXnteV6mFS9xYGSufnaLLtMhQUTP?usp=sharing"
output_dir = "/tmp/nihira-jewels-drive"

# gdown.download_folder has a known issue where one failure crashes the whole process
# We can use gdown.download_folder with `quiet=False` but it still crashes.
# Let's monkey-patch gdown.download to ignore exceptions.
original_download = gdown.download

def safe_download(*args, **kwargs):
    try:
        return original_download(*args, **kwargs)
    except Exception as e:
        print(f"Skipping due to error: {e}")
        return None

gdown.download = safe_download

try:
    gdown.download_folder(url, output=output_dir, use_cookies=False)
except Exception as e:
    print(e)

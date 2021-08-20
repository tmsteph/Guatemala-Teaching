import os
import json

#  Add your API key
gkey = "AIzaSyAn-T-E92OoOwp8PXs-V0zFWGtKAkh9Bqg"

# Alternately, do some python magic...
key_dict = {}
keys_json_path = os.path.expanduser(os.path.join("~", ".api_keys.json"))
if os.path.exists(keys_json_path):
    with open(keys_json_path, 'r') as keys_file:
        key_dict = json.load(keys_file)
else:
    print(f"Could not find {keys_json_path}")

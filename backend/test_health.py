import threading
import time
import urllib.request
import uvicorn
from main import app

def run_server():
    uvicorn.run(app, host="127.0.0.1", port=8000)

server_thread = threading.Thread(target=run_server, daemon=True)
server_thread.start()

time.sleep(3)

try:
    response = urllib.request.urlopen("http://localhost:8000/health")
    print("SUCCESS:", response.read().decode())
except Exception as e:
    print("ERROR:", e)

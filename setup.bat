@echo off
mkdir ai
mkdir blockchain
mkdir database
mkdir docs
call npx -y create-next-app@latest frontend --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd backend
python -m venv venv
call venv\Scripts\pip install -r requirements.txt

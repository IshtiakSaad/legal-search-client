@ECHO OFF
TITLE Client Side - Harvey

ECHO --- Frontend side setup starting ---

:: install npm dependencies
ECHO installing all npm dependencies (npm install)
CALL npm install

:: Run the dev server
ECHO Starting VITE development server
CALL npm run dev

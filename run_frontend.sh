#!/bin/bash
# This is the Run Script to setup and start the client side.

echo "--- Client Side Setup Starting ---"

# Chech for npm (Node.js package manager)
if ! command -v npm &> /dev/null
then 
    echo "NPM (Node.js) could not be found. Please install it."
    exit
fi

# Install Dependencies from package.json
echo "Installing NPM dependencies (npm install) ..."
npm install

# Start the React dev Server
echo ""
echo "---Starting React Dev server ---"
echo "Access the app at: http:localhost:5173"
echo "Press CTRL+C to stop the server."
echo ""
npm run dev
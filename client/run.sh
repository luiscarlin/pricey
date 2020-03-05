#!/bin/bash

cat > /usr/share/nginx/html/config.js <<EOL
window.RUNTIME_API_HOST = '${RUNTIME_API_HOST}'
EOL

nginx -g "daemon off;"
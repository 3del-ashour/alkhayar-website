#!/bin/bash
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:$PATH"
cd "/Users/adelashour/alkhayar website"
exec /opt/homebrew/bin/node node_modules/.bin/next dev

#!/bin/sh

curl --data-binary @$PWD/fixtures/shutdown.json -H "Content-Type: application/json" -X POST $URL

# Try to send data (not shutdown command)
next_response=$(curl --data-binary @$PWD/fixtures/data.json -H "Content-Type: application/json" -X POST $URL)

if [[ $next_response ]]; then
  echo "Failed: server should not accept requests after shutdown command."
  exit 1
else
  echo "Pass: server was shut."
  exit 0
fi
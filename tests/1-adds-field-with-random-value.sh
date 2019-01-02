#!/bin/sh

response=$(curl --data-binary @$PWD/fixtures/data.json -H "Content-Type: application/json" -X POST $URL)

expected="\"a\": ?([1-6]+([.][0-9]+)?)"

if [[ $response =~ $expected ]]; then
  echo "Pass: response contains an additional field \"a\" of a random value between 1 and 6."
else
  echo "Failed: response does not contain additional field \"a\" of a random value between 1 and 6."
fi
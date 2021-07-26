#!/bin/bash

API="http://localhost:4741"
URL_PATH="/trucks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "truck": {
      "city": "'"${CITY}"'",
      "rating": "'"${RATING}"'"
    }
  }'

  echo

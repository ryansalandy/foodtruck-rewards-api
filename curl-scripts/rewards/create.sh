
API="http://localhost:4741"
URL_PATH="/rewards"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "reward": {
      "truck": "'"${TRUCK}"'",
      "ratings": "'"${RATINGS}"'"
    }
  }'

echo

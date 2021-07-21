API="http://localhost:4741"
URL_PATH="/rewards"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "reward": {
      "truck": "'"${TRUCK}"'"
      "ratings": "'"${RATINGS}"'"
    }
  }'

echo

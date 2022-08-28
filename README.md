# Quickstart

```bash
docker-compose up -d
yarn start
yarn seed
```

## Overview

This API:

- Authenticates a user
- List their bookings
- Allow them to confirm their bookings

All endpoints return a response in JSON format.

## API information

The bookings dataset is available `src/data`

User credentials are:

```
Login: booking-profile
Password: booking-test
```

NOTE: you must have curl and jq installed to run these commands.
```
BEARER_TOKEN=$(curl -X POST -H "content-type: application/json" -d '{"username": "booking-profile", "password": "booking-test"}' http://localhost:3000/auth/login | jq -r '.access_token')
curl -H "Authorization: Bearer $BEARER_TOKEN" http://localhost:3000/bookings
curl -X PATCH -H "Authorization: Bearer $BEARER_TOKEN" http://localhost:3000/bookings/1/confirm
```

## Test

```
yarn test
```

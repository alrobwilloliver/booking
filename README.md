# Bubble - Back End Engineer Technical Assessement

_This code is the property of Bubble. It cannot be shared or made public._

## Overview

The goal of this test is to create an API which:

- Authenticates a user
- List their bookings
- Allow them to confirm their bookings

You can use any web server or framework.
You can store data in a file, in memory or in a DB (using docker).

All endpoints must return a response in JSON format.

**Estimated duration**: 1 hour 30 min

## API information

The full api description is detailed in `api-definition.yaml`

The bookings dataset is available `src/data` (written in typescript)

User credentials are:

```
Login: bubble
Password: be-test
```

## Acceptance criteria

As a user,

When I authenticate,

I can access my list of bookings

And, when I confirm a booking

Then I can see it as **confirmed** when I revisit the list of bookings

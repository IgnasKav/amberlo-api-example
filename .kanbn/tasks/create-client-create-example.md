---
created: 2024-06-07T13:20:20.074Z
updated: 2024-06-09T14:12:22.363Z
assigned: ""
progress: 0
tags: []
completed: 2024-06-09T14:12:22.363Z
---

# Create client create example

Options that need to be loaded before creation:

- Countries

API endpoint: https://app.amberlo.io/api/countries

Request type: GET

Response example:

[
{
    "countryId": "935c52f5-8c6e-4aed-8cc3-4413349ccbd6",
    "iso2": "AF",
    "iso3": "AFG",
    "name": "Afghanistan",
    "isInEuropeUnion": false,
    "vatRate": 10
},
....
]

## Sub-tasks

- [x] Implement ClientNumber loading
- [x] Implement ClientStatuses loading
- [x] Implement Relationship types loading
- [x] Implement Countries loading
- [x] Implement Currencies loading
- [x] Implement Vat rates loading

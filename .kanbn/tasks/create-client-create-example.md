---
created: 2024-06-07T13:20:20.074Z
updated: 2024-06-08T11:43:39.658Z
assigned: ""
progress: 0
tags: []
---

# Create client create example

Options that need to be loaded before creation:

- Relationship types

API endpoint: https://app.amberlo.io/api/lists/ClientRelationship?includeDefault=false

Request type: GET

Response example:

{
    "listId": "63cc5bf8-5d5a-4af3-a8fe-46955dab1bc6",
    "name": "ClientRelationship",
    "items": [
        {
            "listItemId": "0a51385f-1829-40a7-b311-3642086f616b",
            "listName": "ClientRelationship",
            "name": "Client",
            "sortIndex": 0,
            "isSystemItem": true,
            "predefinedType": 0,
            "isDeleted": false
        },
        {
            "listItemId": "321243ce-e447-430e-b662-e851aeb3ced6",
            "listName": "ClientRelationship",
            "name": "Partner",
            "sortIndex": 1,
            "isSystemItem": true,
            "predefinedType": 1,
            "isDeleted": false
        },
        {
            "listItemId": "e283a85b-c668-41d1-9100-7677b8bf1c1a",
            "listName": "ClientRelationship",
            "name": "test",
            "sortIndex": 6,
            "isSystemItem": false,
            "isDeleted": false
        }
    ]
}

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

- Currencies

API endpoint: https://app.amberlo.io/api/lists/currencies

Request type: GET

Response example:

{
   rows: [
         {
               "currencyId": "27c878d6-0962-42a0-b4da-93ac1f008c57",
                "name": "AUD",
                "symbol": "$",
                "type": 0
         }, .......
   ]
}

- Vat rates

API endpoint: https://app.amberlo.io/api/lists/VatRates?includeDefault=true

Request type: GET

Response example:

{
    "listId": "00000000-0000-0000-0000-000000000000",
    "items": [
        {
            "listItemId": "935c52f5-8c6e-4aed-8cc3-4413348ccbd6",
            "listName": "VatRates",
            "name": "0",
            "isSystemItem": false,
            "isDisabled": false,
            "isDefault": false,
            "type": "Default"
        },
        {
            "listItemId": "3ee41b90-2b74-40a8-ab43-009bdc716883",
            "listName": "VatRates",
            "name": "Disabled",
            "isSystemItem": true,
            "isDisabled": true,
            "isDefault": false,
            "type": "Disabled"
        },
        {
            "listItemId": "88eff8d5-99cc-43e8-ab77-39f117d22857",
            "listName": "VatRates",
            "name": "Exempt",
            "isSystemItem": true,
            "isDisabled": true,
            "isDefault": false,
            "type": "Exempt"
        }
    ]
}

## Sub-tasks

- [x] Implement ClientNumber loading
- [x] Implement ClientStatuses loading
- [ ] Implement Relationship types loading
- [ ] Implement Countries loading
- [ ] Implement Currencies loading
- [ ] Implement Vat rates loading

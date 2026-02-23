# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  companyCreate: {
    name: "<value>",
    uuid: "123e4567-39ee-4814-adac-23d59fb164ab",
    taxRateUuid: "123e4567-6ad6-4437-a06a-23d59371b1cb",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Client                                                   |
| `companyCreate`                                                      | [components.CompanyCreate](../../models/components/companycreate.md) | :heavy_check_mark:                                                   | Client fields to update                                              |
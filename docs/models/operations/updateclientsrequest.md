# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  companyCreate: {
    name: "<value>",
    uuid: "123e4567-23a2-414b-a103-233c6da0708b",
    taxRateUuid: "123e4567-d3c2-4088-8766-233c6d4303db",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Client                                                   |
| `companyCreate`                                                      | [components.CompanyCreate](../../models/components/companycreate.md) | :heavy_check_mark:                                                   | Client fields to update                                              |
# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  companyCreate: {
    name: "<value>",
    uuid: "123e4567-a3d7-481d-9fd7-23f949ae197b",
    taxRateUuid: "123e4567-4eba-4df4-ab52-23f94ef1ad9b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Client                                                   |
| `companyCreate`                                                      | [components.CompanyCreate](../../models/components/companycreate.md) | :heavy_check_mark:                                                   | Client fields to update                                              |
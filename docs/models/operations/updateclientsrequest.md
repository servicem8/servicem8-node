# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  companyCreate: {
    name: "<value>",
    uuid: "123e4567-b299-4d99-8045-23482d6008fb",
    taxRateUuid: "123e4567-65e7-4555-8c32-23482ede26ab",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Client                                                   |
| `companyCreate`                                                      | [components.CompanyCreate](../../models/components/companycreate.md) | :heavy_check_mark:                                                   | Client fields to update                                              |
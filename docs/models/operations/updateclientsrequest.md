# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  companyCreate: {
    name: "<value>",
    uuid: "123e4567-7d3e-4d00-88a8-2349750be15b",
    taxRateUuid: "123e4567-ff65-4fdf-8d40-23497627170b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Client                                                   |
| `companyCreate`                                                      | [components.CompanyCreate](../../models/components/companycreate.md) | :heavy_check_mark:                                                   | Client fields to update                                              |
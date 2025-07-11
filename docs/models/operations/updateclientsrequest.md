# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  company: {
    name: "<value>",
    uuid: "123e4567-0792-4abc-a9a0-22fd8bd5e04b",
    taxRateUuid: "123e4567-d02c-4d30-823f-22fd8497f6cb",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `uuid`                                                             | *string*                                                           | :heavy_check_mark:                                                 | UUID of the Client                                                 |
| `company`                                                          | [components.CompanyInput](../../models/components/companyinput.md) | :heavy_check_mark:                                                 | Client fields to update                                            |
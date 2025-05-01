# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  company: {
    name: "<value>",
    uuid: "123e4567-0a07-4edf-b2fe-22b6c7cb9d7b",
    taxRateUuid: "123e4567-264b-4f2f-9119-22b6cebe673b",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `uuid`                                                             | *string*                                                           | :heavy_check_mark:                                                 | UUID of the Client                                                 |
| `company`                                                          | [components.CompanyInput](../../models/components/companyinput.md) | :heavy_check_mark:                                                 | Client fields to update                                            |
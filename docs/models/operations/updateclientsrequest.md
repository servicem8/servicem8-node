# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  company: {
    name: "<value>",
    uuid: "123e4567-6225-4d61-9c7f-230b7f38ffbb",
    taxRateUuid: "123e4567-fe37-4042-8f36-230b7fee599b",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `uuid`                                                             | *string*                                                           | :heavy_check_mark:                                                 | UUID of the Client                                                 |
| `company`                                                          | [components.CompanyInput](../../models/components/companyinput.md) | :heavy_check_mark:                                                 | Client fields to update                                            |
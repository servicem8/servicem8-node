# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  company: {
    name: "<value>",
    uuid: "123e4567-b383-4ea9-aa17-231efb2eef5b",
    taxRateUuid: "123e4567-d66e-4585-aff7-231ef1e9451b",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `uuid`                                                             | *string*                                                           | :heavy_check_mark:                                                 | UUID of the Client                                                 |
| `company`                                                          | [components.CompanyInput](../../models/components/companyinput.md) | :heavy_check_mark:                                                 | Client fields to update                                            |
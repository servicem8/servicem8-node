# UpdateClientsRequest

## Example Usage

```typescript
import { UpdateClientsRequest } from "servicem8/models/operations";

let value: UpdateClientsRequest = {
  uuid: "706de9fc-6f51-44a6-a14d-628b91da42cd",
  company: {
    name: "<value>",
    uuid: "123e4567-1dc7-4320-839f-23012d83dbeb",
    taxRateUuid: "123e4567-a8c9-4d4e-878e-23012fc20a6b",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `uuid`                                                             | *string*                                                           | :heavy_check_mark:                                                 | UUID of the Client                                                 |
| `company`                                                          | [components.CompanyInput](../../models/components/companyinput.md) | :heavy_check_mark:                                                 | Client fields to update                                            |
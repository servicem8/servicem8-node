# UpdateTaxRatesRequest

## Example Usage

```typescript
import { UpdateTaxRatesRequest } from "servicem8/models/operations";

let value: UpdateTaxRatesRequest = {
  uuid: "454d7816-ba3d-4ece-ab28-bf8ea8608925",
  taxRate: {
    uuid: "123e4567-1533-4fa7-8ae5-231cfbb8ed9b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `uuid`                                                             | *string*                                                           | :heavy_check_mark:                                                 | UUID of the Tax Rate                                               |
| `taxRate`                                                          | [components.TaxRateInput](../../models/components/taxrateinput.md) | :heavy_check_mark:                                                 | Tax Rate fields to update                                          |
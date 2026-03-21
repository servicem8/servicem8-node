# UpdateTaxRatesRequest

## Example Usage

```typescript
import { UpdateTaxRatesRequest } from "servicem8/models/operations";

let value: UpdateTaxRatesRequest = {
  uuid: "454d7816-ba3d-4ece-ab28-bf8ea8608925",
  taxRateCreate: {
    name: "<value>",
    uuid: "123e4567-1861-46a0-bda4-23f94014608b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Tax Rate                                                 |
| `taxRateCreate`                                                      | [components.TaxRateCreate](../../models/components/taxratecreate.md) | :heavy_check_mark:                                                   | Tax Rate fields to update                                            |
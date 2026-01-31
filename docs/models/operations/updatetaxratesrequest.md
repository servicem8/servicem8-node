# UpdateTaxRatesRequest

## Example Usage

```typescript
import { UpdateTaxRatesRequest } from "servicem8/models/operations";

let value: UpdateTaxRatesRequest = {
  uuid: "454d7816-ba3d-4ece-ab28-bf8ea8608925",
  taxRateCreate: {
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Tax Rate                                                 |
| `taxRateCreate`                                                      | [components.TaxRateCreate](../../models/components/taxratecreate.md) | :heavy_check_mark:                                                   | Tax Rate fields to update                                            |
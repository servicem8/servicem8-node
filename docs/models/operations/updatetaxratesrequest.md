# UpdateTaxRatesRequest

## Example Usage

```typescript
import { UpdateTaxRatesRequest } from "servicem8/models/operations";

let value: UpdateTaxRatesRequest = {
  uuid: "454d7816-ba3d-4ece-ab28-bf8ea8608925",
  taxRateCreate: {
    name: "<value>",
    uuid: "123e4567-6ec1-4642-8abc-23e930976dcb",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Tax Rate                                                 |
| `taxRateCreate`                                                      | [components.TaxRateCreate](../../models/components/taxratecreate.md) | :heavy_check_mark:                                                   | Tax Rate fields to update                                            |
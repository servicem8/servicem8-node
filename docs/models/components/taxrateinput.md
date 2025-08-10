# TaxRateInput

## Example Usage

```typescript
import { TaxRateInput } from "servicem8/models/components";

let value: TaxRateInput = {
  uuid: "123e4567-3d3d-4ffc-8bef-231b2c6f8d6b",
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for this record                                          | 123e4567-3d3d-4ffc-8bef-231b2c6f8d6b                                       |
| `active`                                                                   | [components.TaxRateActive](../../models/components/taxrateactive.md)       | :heavy_minus_sign:                                                         | Record active/deleted flag.  Valid values are [0,1]                        |                                                                            |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isDefaultTaxRate`                                                         | [components.IsDefaultTaxRate](../../models/components/isdefaulttaxrate.md) | :heavy_minus_sign:                                                         |  Valid values are [0,1]                                                    |                                                                            |
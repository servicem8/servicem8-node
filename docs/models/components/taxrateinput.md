# TaxRateInput

## Example Usage

```typescript
import { TaxRateInput } from "servicem8/models/components";

let value: TaxRateInput = {
  uuid: "123e4567-7cd6-4ab2-93e9-231ef0e55d0b",
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for this record                                          | 123e4567-7cd6-4ab2-93e9-231ef0e55d0b                                       |
| `active`                                                                   | [components.TaxRateActive](../../models/components/taxrateactive.md)       | :heavy_minus_sign:                                                         | Record active/deleted flag.  Valid values are [0,1]                        |                                                                            |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isDefaultTaxRate`                                                         | [components.IsDefaultTaxRate](../../models/components/isdefaulttaxrate.md) | :heavy_minus_sign:                                                         |  Valid values are [0,1]                                                    |                                                                            |
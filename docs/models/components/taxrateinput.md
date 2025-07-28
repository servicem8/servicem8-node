# TaxRateInput

## Example Usage

```typescript
import { TaxRateInput } from "servicem8/models/components";

let value: TaxRateInput = {
  uuid: "123e4567-b775-4fa0-8d4a-230efe833adb",
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for this record                                          | 123e4567-b775-4fa0-8d4a-230efe833adb                                       |
| `active`                                                                   | [components.TaxRateActive](../../models/components/taxrateactive.md)       | :heavy_minus_sign:                                                         | Record active/deleted flag.  Valid values are [0,1]                        |                                                                            |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isDefaultTaxRate`                                                         | [components.IsDefaultTaxRate](../../models/components/isdefaulttaxrate.md) | :heavy_minus_sign:                                                         |  Valid values are [0,1]                                                    |                                                                            |
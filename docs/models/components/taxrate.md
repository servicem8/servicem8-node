# TaxRate

## Example Usage

```typescript
import { TaxRate } from "servicem8/models/components";

let value: TaxRate = {
  uuid: "123e4567-3826-4d0f-b1b3-22b56f66246b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Record UUID key                                                            | 123e4567-3826-4d0f-b1b3-22b56f66246b                                       |
| `active`                                                                   | [components.TaxRateActive](../../models/components/taxrateactive.md)       | :heavy_minus_sign:                                                         | Record active/deleted flag. <br/><br/>Valid values are [0,1]               |                                                                            |
| `editDate`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Record last modified timestamp                                             | YYYY-MM-DD HH:MM:SS                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isDefaultTaxRate`                                                         | [components.IsDefaultTaxRate](../../models/components/isdefaulttaxrate.md) | :heavy_minus_sign:                                                         | <br/><br/>Valid values are [0,1]                                           |                                                                            |
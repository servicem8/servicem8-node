# MaterialBundle

## Example Usage

```typescript
import { MaterialBundle } from "servicem8/models/components";

let value: MaterialBundle = {
  uuid: "123e4567-2e7a-490f-8d31-22b4d60de63b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  itemNumber: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Record UUID key                                                                    | 123e4567-2e7a-490f-8d31-22b4d60de63b                                               |
| `active`                                                                           | [components.MaterialBundleActive](../../models/components/materialbundleactive.md) | :heavy_minus_sign:                                                                 | Record active/deleted flag. <br/><br/>Valid values are [0,1]                       |                                                                                    |
| `editDate`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | Record last modified timestamp                                                     | YYYY-MM-DD HH:MM:SS                                                                |
| `itemNumber`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `materialList`                                                                     | [components.MaterialList](../../models/components/materiallist.md)[]               | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
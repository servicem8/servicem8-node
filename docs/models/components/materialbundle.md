# MaterialBundle

## Example Usage

```typescript
import { MaterialBundle } from "servicem8/models/components";

let value: MaterialBundle = {
  uuid: "123e4567-f766-4026-abe5-22b56c01787b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  itemNumber: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Record UUID key                                                                    | 123e4567-f766-4026-abe5-22b56c01787b                                               |
| `active`                                                                           | [components.MaterialBundleActive](../../models/components/materialbundleactive.md) | :heavy_minus_sign:                                                                 | Record active/deleted flag. <br/><br/>Valid values are [0,1]                       |                                                                                    |
| `editDate`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | Record last modified timestamp                                                     | YYYY-MM-DD HH:MM:SS                                                                |
| `itemNumber`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `materialList`                                                                     | [components.MaterialList](../../models/components/materiallist.md)[]               | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
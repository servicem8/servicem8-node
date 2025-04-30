# MaterialBundleInput

## Example Usage

```typescript
import { MaterialBundleInput } from "servicem8/models/components";

let value: MaterialBundleInput = {
  uuid: "123e4567-e5e2-4adb-8269-22b56afa700b",
  itemNumber: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Record UUID key                                                                    | 123e4567-e5e2-4adb-8269-22b56afa700b                                               |
| `active`                                                                           | [components.MaterialBundleActive](../../models/components/materialbundleactive.md) | :heavy_minus_sign:                                                                 | Record active/deleted flag. <br/><br/>Valid values are [0,1]                       |                                                                                    |
| `itemNumber`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `materialList`                                                                     | [components.MaterialList](../../models/components/materiallist.md)[]               | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
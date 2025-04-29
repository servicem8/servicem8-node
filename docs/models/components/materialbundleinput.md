# MaterialBundleInput

## Example Usage

```typescript
import { MaterialBundleInput } from "servicem8/models/components";

let value: MaterialBundleInput = {
  uuid: "123e4567-a275-440b-a3f1-22b4d26a4f4b",
  itemNumber: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Record UUID key                                                                    | 123e4567-a275-440b-a3f1-22b4d26a4f4b                                               |
| `active`                                                                           | [components.MaterialBundleActive](../../models/components/materialbundleactive.md) | :heavy_minus_sign:                                                                 | Record active/deleted flag. <br/><br/>Valid values are [0,1]                       |                                                                                    |
| `itemNumber`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `materialList`                                                                     | [components.MaterialList](../../models/components/materiallist.md)[]               | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
# AssetTypeFieldInput

## Example Usage

```typescript
import { AssetTypeFieldInput } from "servicem8/models/components";

let value: AssetTypeFieldInput = {
  uuid: "123e4567-ef1a-4db5-b17b-22b4dd16b3cb",
  assetTypeUuid: "123e4567-267b-46e9-b438-22b4d966ffbb",
  name: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Record UUID key                                                                    | 123e4567-ef1a-4db5-b17b-22b4dd16b3cb                                               |
| `active`                                                                           | [components.AssetTypeFieldActive](../../models/components/assettypefieldactive.md) | :heavy_minus_sign:                                                                 | Record active/deleted flag. <br/><br/>Valid values are [0,1]                       |                                                                                    |
| `assetTypeUuid`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | (Read-only)                                                                        | 123e4567-267b-46e9-b438-22b4d966ffbb                                               |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `fieldData`                                                                        | [components.FieldData](../../models/components/fielddata.md)                       | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `sortOrder`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
# AssetTypeField

## Example Usage

```typescript
import { AssetTypeField } from "servicem8/models/components";

let value: AssetTypeField = {
  uuid: "123e4567-2850-4248-90d7-22b569c94c8b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  assetTypeUuid: "123e4567-8ef8-4198-978b-22b56892668b",
  name: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Record UUID key                                                                    | 123e4567-2850-4248-90d7-22b569c94c8b                                               |
| `active`                                                                           | [components.AssetTypeFieldActive](../../models/components/assettypefieldactive.md) | :heavy_minus_sign:                                                                 | Record active/deleted flag. <br/><br/>Valid values are [0,1]                       |                                                                                    |
| `editDate`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | Record last modified timestamp                                                     | YYYY-MM-DD HH:MM:SS                                                                |
| `assetTypeUuid`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | (Read-only)                                                                        | 123e4567-8ef8-4198-978b-22b56892668b                                               |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `fieldData`                                                                        | [components.FieldData](../../models/components/fielddata.md)                       | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `sortOrder`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
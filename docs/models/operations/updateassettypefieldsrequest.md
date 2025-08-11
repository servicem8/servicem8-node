# UpdateAssetTypeFieldsRequest

## Example Usage

```typescript
import { UpdateAssetTypeFieldsRequest } from "servicem8/models/operations";

let value: UpdateAssetTypeFieldsRequest = {
  uuid: "0e497e9c-3bf6-4591-8804-ec893a659c64",
  assetTypeField: {
    uuid: "123e4567-3555-4960-8173-231cf2ea478b",
    assetTypeUuid: "123e4567-45b0-446b-8c4c-231cf58cf3eb",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Asset Type Field                                                     |
| `assetTypeField`                                                                 | [components.AssetTypeFieldInput](../../models/components/assettypefieldinput.md) | :heavy_check_mark:                                                               | Asset Type Field fields to update                                                |
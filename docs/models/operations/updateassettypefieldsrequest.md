# UpdateAssetTypeFieldsRequest

## Example Usage

```typescript
import { UpdateAssetTypeFieldsRequest } from "servicem8/models/operations";

let value: UpdateAssetTypeFieldsRequest = {
  uuid: "0e497e9c-3bf6-4591-8804-ec893a659c64",
  assetTypeField: {
    uuid: "123e4567-c311-4348-85c8-230049eb726b",
    assetTypeUuid: "123e4567-a7a6-4882-b3b3-23004538790b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Asset Type Field                                                     |
| `assetTypeField`                                                                 | [components.AssetTypeFieldInput](../../models/components/assettypefieldinput.md) | :heavy_check_mark:                                                               | Asset Type Field fields to update                                                |
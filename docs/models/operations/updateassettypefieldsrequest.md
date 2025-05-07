# UpdateAssetTypeFieldsRequest

## Example Usage

```typescript
import { UpdateAssetTypeFieldsRequest } from "servicem8/models/operations";

let value: UpdateAssetTypeFieldsRequest = {
  uuid: "0e497e9c-3bf6-4591-8804-ec893a659c64",
  assetTypeField: {
    uuid: "123e4567-1ffb-40c6-9c70-22bb013fb7bb",
    assetTypeUuid: "123e4567-d110-4e80-93b9-22bb0ad0a69b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Asset Type Field                                                     |
| `assetTypeField`                                                                 | [components.AssetTypeFieldInput](../../models/components/assettypefieldinput.md) | :heavy_check_mark:                                                               | Asset Type Field fields to update                                                |
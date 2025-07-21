# UpdateAssetTypeFieldsRequest

## Example Usage

```typescript
import { UpdateAssetTypeFieldsRequest } from "servicem8/models/operations";

let value: UpdateAssetTypeFieldsRequest = {
  uuid: "0e497e9c-3bf6-4591-8804-ec893a659c64",
  assetTypeField: {
    uuid: "123e4567-536f-40d5-9350-230767c0f78b",
    assetTypeUuid: "123e4567-a439-40e4-b5c0-23076d61526b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Asset Type Field                                                     |
| `assetTypeField`                                                                 | [components.AssetTypeFieldInput](../../models/components/assettypefieldinput.md) | :heavy_check_mark:                                                               | Asset Type Field fields to update                                                |
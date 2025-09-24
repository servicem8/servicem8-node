# UpdateAssetTypeFieldsRequest

## Example Usage

```typescript
import { UpdateAssetTypeFieldsRequest } from "servicem8/models/operations";

let value: UpdateAssetTypeFieldsRequest = {
  uuid: "0e497e9c-3bf6-4591-8804-ec893a659c64",
  assetTypeFieldCreate: {
    uuid: "123e4567-8c7e-4fe3-a8e0-234820bfea9b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the Asset Type Field                                                       |
| `assetTypeFieldCreate`                                                             | [components.AssetTypeFieldCreate](../../models/components/assettypefieldcreate.md) | :heavy_check_mark:                                                                 | Asset Type Field fields to update                                                  |
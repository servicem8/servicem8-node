# UpdateAssetTypeFieldsRequest

## Example Usage

```typescript
import { UpdateAssetTypeFieldsRequest } from "servicem8/models/operations";

let value: UpdateAssetTypeFieldsRequest = {
  uuid: "0e497e9c-3bf6-4591-8804-ec893a659c64",
  assetTypeField: {
    uuid: "123e4567-283f-4c7f-9908-23004f2bb34b",
    assetTypeUuid: "123e4567-efa5-41fb-9038-23004b95b27b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Asset Type Field                                                     |
| `assetTypeField`                                                                 | [components.AssetTypeFieldInput](../../models/components/assettypefieldinput.md) | :heavy_check_mark:                                                               | Asset Type Field fields to update                                                |
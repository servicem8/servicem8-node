# UpdateAssetTypesRequest

## Example Usage

```typescript
import { UpdateAssetTypesRequest } from "servicem8/models/operations";

let value: UpdateAssetTypesRequest = {
  uuid: "46b5b535-a0d0-4436-ad42-246c98a238ec",
  assetType: {
    uuid: "123e4567-7536-4e74-a3d6-231fe19e7f7b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Asset Type                                                 |
| `assetType`                                                            | [components.AssetTypeInput](../../models/components/assettypeinput.md) | :heavy_check_mark:                                                     | Asset Type fields to update                                            |
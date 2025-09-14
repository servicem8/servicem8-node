# UpdateAssetTypesRequest

## Example Usage

```typescript
import { UpdateAssetTypesRequest } from "servicem8/models/operations";

let value: UpdateAssetTypesRequest = {
  uuid: "46b5b535-a0d0-4436-ad42-246c98a238ec",
  assetTypeCreate: {
    uuid: "123e4567-3603-4cca-b737-233c6d3acc6b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Asset Type                                                   |
| `assetTypeCreate`                                                        | [components.AssetTypeCreate](../../models/components/assettypecreate.md) | :heavy_check_mark:                                                       | Asset Type fields to update                                              |
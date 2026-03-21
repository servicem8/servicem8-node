# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  assetCreate: {
    uuid: "123e4567-18c8-451f-879d-23f9421d865b",
    companyUuid: "123e4567-fbc9-4ae2-b9d1-23f9463186cb",
    geoTimestamp: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Asset                                                |
| `assetCreate`                                                    | [components.AssetCreate](../../models/components/assetcreate.md) | :heavy_check_mark:                                               | Asset fields to update                                           |
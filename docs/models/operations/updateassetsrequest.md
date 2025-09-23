# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  assetCreate: {
    uuid: "123e4567-3977-47d1-ba9c-2346717f666b",
    companyUuid: "123e4567-f84e-4eb2-a3d4-234676fbeccb",
    geoTimestamp: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Asset                                                |
| `assetCreate`                                                    | [components.AssetCreate](../../models/components/assetcreate.md) | :heavy_check_mark:                                               | Asset fields to update                                           |
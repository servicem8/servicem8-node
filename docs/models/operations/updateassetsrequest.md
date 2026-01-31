# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  assetCreate: {
    uuid: "123e4567-f21d-4a2d-b971-23c6f8b29dfb",
    companyUuid: "123e4567-474d-4e69-b92a-23c6fa6e2f4b",
    geoTimestamp: "2026-01-01 12:00:00",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Asset                                                |
| `assetCreate`                                                    | [components.AssetCreate](../../models/components/assetcreate.md) | :heavy_check_mark:                                               | Asset fields to update                                           |
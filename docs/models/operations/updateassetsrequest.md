# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  assetCreate: {
    uuid: "123e4567-6174-4a01-bfb0-23b2ea146e3b",
    companyUuid: "123e4567-4567-4375-a4f5-23b2e6ac0bab",
    geoTimestamp: "2026-01-01 12:00:00",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Asset                                                |
| `assetCreate`                                                    | [components.AssetCreate](../../models/components/assetcreate.md) | :heavy_check_mark:                                               | Asset fields to update                                           |
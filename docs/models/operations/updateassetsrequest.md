# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  assetCreate: {
    uuid: "123e4567-b42c-4021-bae5-234d579b1f4b",
    companyUuid: "123e4567-dc01-4af6-b3bb-234d50884c0b",
    geoTimestamp: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Asset                                                |
| `assetCreate`                                                    | [components.AssetCreate](../../models/components/assetcreate.md) | :heavy_check_mark:                                               | Asset fields to update                                           |
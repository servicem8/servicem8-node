# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  asset: {
    uuid: "123e4567-57e3-4827-9fe8-231ef2c7492b",
    companyUuid: "123e4567-d57c-4167-a16f-231efb4f512b",
    assetTypeUuid: "123e4567-6c9d-4b2f-a1a4-231eff6f1deb",
    geoTimestamp: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Asset                                              |
| `asset`                                                        | [components.AssetInput](../../models/components/assetinput.md) | :heavy_check_mark:                                             | Asset fields to update                                         |
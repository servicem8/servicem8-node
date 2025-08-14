# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  asset: {
    uuid: "123e4567-f180-4508-94d8-231fe39e62db",
    companyUuid: "123e4567-2d31-4640-814a-231fe1887bcb",
    assetTypeUuid: "123e4567-875a-4da5-8fed-231fecc7c98b",
    geoTimestamp: "2025-08-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Asset                                              |
| `asset`                                                        | [components.AssetInput](../../models/components/assetinput.md) | :heavy_check_mark:                                             | Asset fields to update                                         |
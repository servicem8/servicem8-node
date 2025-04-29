# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  asset: {
    uuid: "123e4567-82c3-4bb0-8c41-22b4db8f91fb",
    companyUuid: "123e4567-b1c7-4f04-bb5e-22b4d788843b",
    assetTypeUuid: "123e4567-ec18-416c-a525-22b4de4f6fab",
    name: "<value>",
    geoTimestamp: "YYYY-MM-DD HH:MM:SS",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Asset                                              |
| `asset`                                                        | [components.AssetInput](../../models/components/assetinput.md) | :heavy_check_mark:                                             | Asset fields to update                                         |
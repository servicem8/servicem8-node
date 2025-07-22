# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  asset: {
    uuid: "123e4567-ff2f-4b01-a42b-2308e3f48a4b",
    companyUuid: "123e4567-efda-455c-a9d0-2308e083424b",
    assetTypeUuid: "123e4567-06a1-4de5-96ed-2308e6a7ec5b",
    geoTimestamp: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Asset                                              |
| `asset`                                                        | [components.AssetInput](../../models/components/assetinput.md) | :heavy_check_mark:                                             | Asset fields to update                                         |
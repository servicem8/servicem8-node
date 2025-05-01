# UpdateAssetsRequest

## Example Usage

```typescript
import { UpdateAssetsRequest } from "servicem8/models/operations";

let value: UpdateAssetsRequest = {
  uuid: "abc96d81-74c1-442a-8b78-ad1771514a44",
  asset: {
    uuid: "123e4567-69d9-4709-98cd-22b6c0a2f47b",
    companyUuid: "123e4567-a0af-43f2-8e59-22b6cd1990eb",
    assetTypeUuid: "123e4567-a523-4e79-918f-22b6c7c7edfb",
    geoTimestamp: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Asset                                              |
| `asset`                                                        | [components.AssetInput](../../models/components/assetinput.md) | :heavy_check_mark:                                             | Asset fields to update                                         |
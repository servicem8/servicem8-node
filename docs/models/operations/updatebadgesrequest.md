# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badge: {
    uuid: "123e4567-7828-4bb7-9508-231ef31e0bab",
    name: "<value>",
    regardingFormUuid: "123e4567-aa52-45ef-b113-231efc3a3deb",
    regardingAssetTypeUuid: "123e4567-8a3e-48c5-bbdf-231effa5da6b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Badge                                              |
| `badge`                                                        | [components.BadgeInput](../../models/components/badgeinput.md) | :heavy_check_mark:                                             | Badge fields to update                                         |
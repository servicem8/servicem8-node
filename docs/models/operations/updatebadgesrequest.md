# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badge: {
    uuid: "123e4567-a3e6-4cd7-801f-22b6c43d574b",
    name: "<value>",
    regardingFormUuid: "123e4567-c2a0-46e1-8bd0-22b6ce258d3b",
    regardingAssetTypeUuid: "123e4567-d8ca-4b37-877b-22b6c9a6fccb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Badge                                              |
| `badge`                                                        | [components.BadgeInput](../../models/components/badgeinput.md) | :heavy_check_mark:                                             | Badge fields to update                                         |
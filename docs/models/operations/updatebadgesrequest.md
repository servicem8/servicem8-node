# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badgeCreate: {
    uuid: "123e4567-dd22-430f-beda-23497e05529b",
    name: "<value>",
    regardingFormUuid: "123e4567-c59e-43b6-9a07-234971a6b05b",
    regardingAssetTypeUuid: "123e4567-c6c1-4eeb-bb40-23497c0f714b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Badge                                                |
| `badgeCreate`                                                    | [components.BadgeCreate](../../models/components/badgecreate.md) | :heavy_check_mark:                                               | Badge fields to update                                           |
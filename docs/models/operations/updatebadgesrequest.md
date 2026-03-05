# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badgeCreate: {
    uuid: "123e4567-5afc-4713-9fbd-23e938854b9b",
    name: "<value>",
    regardingFormUuid: "123e4567-3891-42df-8201-23e93cb1f4eb",
    regardingAssetTypeUuid: "123e4567-ae7d-44f6-a9d8-23e932ee5d3b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Badge                                                |
| `badgeCreate`                                                    | [components.BadgeCreate](../../models/components/badgecreate.md) | :heavy_check_mark:                                               | Badge fields to update                                           |
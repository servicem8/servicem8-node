# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badgeCreate: {
    uuid: "123e4567-e22f-41ee-a1e2-23422f2e0dbb",
    name: "<value>",
    regardingFormUuid: "123e4567-ec0e-4011-a33b-2342288f048b",
    regardingAssetTypeUuid: "123e4567-cae5-493d-8bb6-2342207a244b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Badge                                                |
| `badgeCreate`                                                    | [components.BadgeCreate](../../models/components/badgecreate.md) | :heavy_check_mark:                                               | Badge fields to update                                           |
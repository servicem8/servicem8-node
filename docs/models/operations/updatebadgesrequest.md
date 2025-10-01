# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badgeCreate: {
    uuid: "123e4567-e23b-4a6b-9f6c-234d58b12ebb",
    name: "<value>",
    regardingFormUuid: "123e4567-4c47-4d03-8f38-234d5a3d6c0b",
    regardingAssetTypeUuid: "123e4567-a3f8-4ed1-ad47-234d55c0a9cb",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Badge                                                |
| `badgeCreate`                                                    | [components.BadgeCreate](../../models/components/badgecreate.md) | :heavy_check_mark:                                               | Badge fields to update                                           |
# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badgeCreate: {
    uuid: "123e4567-f164-4621-9794-2348252f212b",
    name: "<value>",
    regardingFormUuid: "123e4567-dae0-4930-a864-234826aac2fb",
    regardingAssetTypeUuid: "123e4567-2ebf-42da-97dd-23482ea3452b",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Badge                                                |
| `badgeCreate`                                                    | [components.BadgeCreate](../../models/components/badgecreate.md) | :heavy_check_mark:                                               | Badge fields to update                                           |
# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badge: {
    uuid: "123e4567-6d1c-4c05-8be9-231b29a42a7b",
    name: "<value>",
    regardingFormUuid: "123e4567-a10e-47a5-8b0d-231b27e0e3db",
    regardingAssetTypeUuid: "123e4567-a9a1-4e67-a470-231b2c114e5b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Badge                                              |
| `badge`                                                        | [components.BadgeInput](../../models/components/badgeinput.md) | :heavy_check_mark:                                             | Badge fields to update                                         |
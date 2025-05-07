# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badge: {
    uuid: "123e4567-c1aa-482a-90b1-22bcb6f4fe6b",
    name: "<value>",
    regardingFormUuid: "123e4567-fa1a-44e9-bdcc-22bcb4fc3efb",
    regardingAssetTypeUuid: "123e4567-3554-4e60-b430-22bcb2e00eeb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Badge                                              |
| `badge`                                                        | [components.BadgeInput](../../models/components/badgeinput.md) | :heavy_check_mark:                                             | Badge fields to update                                         |
# UpdateBadgesRequest

## Example Usage

```typescript
import { UpdateBadgesRequest } from "servicem8/models/operations";

let value: UpdateBadgesRequest = {
  uuid: "dc958f3c-f61f-4e7c-a32f-ac09ac1db338",
  badge: {
    uuid: "123e4567-42ab-4a2b-a3ed-22b4d02c737b",
    name: "<value>",
    regardingFormUuid: "123e4567-0af4-4ec6-beb2-22b4d65e0cbb",
    regardingAssetTypeUuid: "123e4567-4bca-4b56-8605-22b4d9179b7b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Badge                                              |
| `badge`                                                        | [components.BadgeInput](../../models/components/badgeinput.md) | :heavy_check_mark:                                             | Badge fields to update                                         |
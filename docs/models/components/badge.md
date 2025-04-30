# Badge

## Example Usage

```typescript
import { Badge } from "servicem8/models/components";

let value: Badge = {
  uuid: "123e4567-e778-487e-99f9-22b56b561aeb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
  regardingFormUuid: "123e4567-5ce2-477d-b8ee-22b566b9472b",
  regardingAssetTypeUuid: "123e4567-753f-4d08-a026-22b56e6e255b",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Record UUID key                                                  | 123e4567-e778-487e-99f9-22b56b561aeb                             |
| `active`                                                         | [components.BadgeActive](../../models/components/badgeactive.md) | :heavy_minus_sign:                                               | Record active/deleted flag. <br/><br/>Valid values are [0,1]     |                                                                  |
| `editDate`                                                       | *string*                                                         | :heavy_minus_sign:                                               | Record last modified timestamp                                   | YYYY-MM-DD HH:MM:SS                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Badge Name                                                       |                                                                  |
| `automaticallyAllocated`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `fileName`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `regardingFormUuid`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-5ce2-477d-b8ee-22b566b9472b                             |
| `regardingAssetTypeUuid`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-753f-4d08-a026-22b56e6e255b                             |
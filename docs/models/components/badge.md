# Badge

## Example Usage

```typescript
import { Badge } from "servicem8/models/components";

let value: Badge = {
  uuid: "123e4567-6bed-4fc2-90a6-22b4d89e1eeb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
  regardingFormUuid: "123e4567-efce-4f55-a4ed-22b4d5f2a9eb",
  regardingAssetTypeUuid: "123e4567-d74a-46e0-89f1-22b4da76c33b",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Record UUID key                                                  | 123e4567-6bed-4fc2-90a6-22b4d89e1eeb                             |
| `active`                                                         | [components.BadgeActive](../../models/components/badgeactive.md) | :heavy_minus_sign:                                               | Record active/deleted flag. <br/><br/>Valid values are [0,1]     |                                                                  |
| `editDate`                                                       | *string*                                                         | :heavy_minus_sign:                                               | Record last modified timestamp                                   | YYYY-MM-DD HH:MM:SS                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Badge Name                                                       |                                                                  |
| `automaticallyAllocated`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `fileName`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `regardingFormUuid`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-efce-4f55-a4ed-22b4d5f2a9eb                             |
| `regardingAssetTypeUuid`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-d74a-46e0-89f1-22b4da76c33b                             |
# Badge

## Example Usage

```typescript
import { Badge } from "servicem8/models/components";

let value: Badge = {
  uuid: "123e4567-b986-432c-af2c-22b56b6d339b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
  regardingFormUuid: "123e4567-16b1-46c6-abab-22b56589fbdb",
  regardingAssetTypeUuid: "123e4567-ab60-4561-a222-22b56585483b",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Record UUID key                                                  | 123e4567-b986-432c-af2c-22b56b6d339b                             |
| `active`                                                         | [components.BadgeActive](../../models/components/badgeactive.md) | :heavy_minus_sign:                                               | Record active/deleted flag. <br/><br/>Valid values are [0,1]     |                                                                  |
| `editDate`                                                       | *string*                                                         | :heavy_minus_sign:                                               | Record last modified timestamp                                   | YYYY-MM-DD HH:MM:SS                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Badge Name                                                       |                                                                  |
| `automaticallyAllocated`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `fileName`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `regardingFormUuid`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-16b1-46c6-abab-22b56589fbdb                             |
| `regardingAssetTypeUuid`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-ab60-4561-a222-22b56585483b                             |
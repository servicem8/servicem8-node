# BadgeInput

## Example Usage

```typescript
import { BadgeInput } from "servicem8/models/components";

let value: BadgeInput = {
  uuid: "123e4567-42ab-4a2b-a3ed-22b4d02c737b",
  name: "<value>",
  regardingFormUuid: "123e4567-0af4-4ec6-beb2-22b4d65e0cbb",
  regardingAssetTypeUuid: "123e4567-4bca-4b56-8605-22b4d9179b7b",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Record UUID key                                                  | 123e4567-42ab-4a2b-a3ed-22b4d02c737b                             |
| `active`                                                         | [components.BadgeActive](../../models/components/badgeactive.md) | :heavy_minus_sign:                                               | Record active/deleted flag. <br/><br/>Valid values are [0,1]     |                                                                  |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Badge Name                                                       |                                                                  |
| `automaticallyAllocated`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `fileName`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `regardingFormUuid`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-0af4-4ec6-beb2-22b4d65e0cbb                             |
| `regardingAssetTypeUuid`                                         | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              | 123e4567-4bca-4b56-8605-22b4d9179b7b                             |
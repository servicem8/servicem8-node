# SmsTemplate

## Example Usage

```typescript
import { SmsTemplate } from "servicem8/models/components";

let value: SmsTemplate = {
  uuid: "123e4567-81e4-416b-9cfd-230c47334f7b",
  editDate: "2025-07-01 12:00:00",
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-81e4-416b-9cfd-230c47334f7b                                         |
| `active`                                                                     | [components.SmsTemplateActive](../../models/components/smstemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1]                          |                                                                              |
| `editDate`                                                                   | *any*                                                                        | :heavy_minus_sign:                                                           | Timestamp at which record was last modified                                  | 2025-07-01 12:00:00                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
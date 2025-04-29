# SmsTemplate

## Example Usage

```typescript
import { SmsTemplate } from "servicem8/models/components";

let value: SmsTemplate = {
  uuid: "123e4567-eeae-4772-9605-22b4d4f759eb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Record UUID key                                                              | 123e4567-eeae-4772-9605-22b4d4f759eb                                         |
| `active`                                                                     | [components.SmsTemplateActive](../../models/components/smstemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag. <br/><br/>Valid values are [0,1]                 |                                                                              |
| `editDate`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Record last modified timestamp                                               | YYYY-MM-DD HH:MM:SS                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
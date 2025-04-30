# SmsTemplate

## Example Usage

```typescript
import { SmsTemplate } from "servicem8/models/components";

let value: SmsTemplate = {
  uuid: "123e4567-7042-4144-8a87-22b562af38cb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Record UUID key                                                              | 123e4567-7042-4144-8a87-22b562af38cb                                         |
| `active`                                                                     | [components.SmsTemplateActive](../../models/components/smstemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag. <br/><br/>Valid values are [0,1]                 |                                                                              |
| `editDate`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Record last modified timestamp                                               | YYYY-MM-DD HH:MM:SS                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
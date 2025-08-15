# SmsTemplateInput

## Example Usage

```typescript
import { SmsTemplateInput } from "servicem8/models/components";

let value: SmsTemplateInput = {
  uuid: "123e4567-4e58-4082-86c0-2320a9e1589b",
  name: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-4e58-4082-86c0-2320a9e1589b                                         |
| `active`                                                                     | [components.SmsTemplateActive](../../models/components/smstemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1]                          |                                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `message`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
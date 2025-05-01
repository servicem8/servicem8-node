# EmailTemplate

## Example Usage

```typescript
import { EmailTemplate } from "servicem8/models/components";

let value: EmailTemplate = {
  uuid: "123e4567-b758-4b00-a655-22b6c89668db",
  editDate: "2025-05-01 12:00:00",
  name: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | Unique identifier for this record                                                | 123e4567-b758-4b00-a655-22b6c89668db                                             |
| `active`                                                                         | [components.EmailTemplateActive](../../models/components/emailtemplateactive.md) | :heavy_minus_sign:                                                               | Record active/deleted flag.  Valid values are [0,1]                              |                                                                                  |
| `editDate`                                                                       | *any*                                                                            | :heavy_minus_sign:                                                               | Timestamp at which record was last modified                                      | 2025-05-01 12:00:00                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `subject`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
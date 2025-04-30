# EmailTemplate

## Example Usage

```typescript
import { EmailTemplate } from "servicem8/models/components";

let value: EmailTemplate = {
  uuid: "123e4567-c10f-4f3f-acbf-22b56eabd1eb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | Record UUID key                                                                  | 123e4567-c10f-4f3f-acbf-22b56eabd1eb                                             |
| `active`                                                                         | [components.EmailTemplateActive](../../models/components/emailtemplateactive.md) | :heavy_minus_sign:                                                               | Record active/deleted flag. <br/><br/>Valid values are [0,1]                     |                                                                                  |
| `editDate`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | Record last modified timestamp                                                   | YYYY-MM-DD HH:MM:SS                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `subject`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
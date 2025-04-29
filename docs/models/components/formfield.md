# FormField

## Example Usage

```typescript
import { FormField } from "servicem8/models/components";

let value: FormField = {
  uuid: "123e4567-f3e7-4ccd-9ea5-22b4d48de15b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  formUuid: "123e4567-a082-436f-bdf0-22b4dd2cd8ab",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Record UUID key                                                          | 123e4567-f3e7-4ccd-9ea5-22b4d48de15b                                     |
| `active`                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]             |                                                                          |
| `editDate`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | Record last modified timestamp                                           | YYYY-MM-DD HH:MM:SS                                                      |
| `formUuid`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 123e4567-a082-436f-bdf0-22b4dd2cd8ab                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `fieldDataJson`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sortOrder`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
# FormField

## Example Usage

```typescript
import { FormField } from "servicem8/models/components";

let value: FormField = {
  formUuid: "123e4567-5388-44e6-bbe3-23482682244b",
  uuid: "123e4567-b2f7-4da3-bb06-23482f49f7ab",
  editDate: "2025-09-01 12:00:00",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `formUuid`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | The UUID of the form this field belongs to.                                              | 123e4567-5388-44e6-bbe3-23482682244b                                                     |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the form field.                                                              |                                                                                          |
| `fieldDataJson`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | JSON configuration for this question, including type, mandatory, choices and conditions. |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | The sort order of the form field.                                                        |                                                                                          |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Unique identifier for this record                                                        | 123e4567-b2f7-4da3-bb06-23482f49f7ab                                                     |
| `active`                                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md)                 | :heavy_minus_sign:                                                                       | Record active/deleted flag.  Valid values are [0,1]                                      |                                                                                          |
| `editDate`                                                                               | *any*                                                                                    | :heavy_minus_sign:                                                                       | Timestamp at which record was last modified                                              | 2025-09-01 12:00:00                                                                      |
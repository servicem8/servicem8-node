# FormField

## Example Usage

```typescript
import { FormField } from "servicem8/models/components";

let value: FormField = {
  uuid: "123e4567-dea4-42dc-9dc7-231fe70fb2cb",
  editDate: "2025-08-01 12:00:00",
  formUuid: "123e4567-8d0a-4f63-9e6b-231fe2aa27fb",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Unique identifier for this record                                                        | 123e4567-dea4-42dc-9dc7-231fe70fb2cb                                                     |
| `active`                                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md)                 | :heavy_minus_sign:                                                                       | Record active/deleted flag.  Valid values are [0,1]                                      |                                                                                          |
| `editDate`                                                                               | *any*                                                                                    | :heavy_minus_sign:                                                                       | Timestamp at which record was last modified                                              | 2025-08-01 12:00:00                                                                      |
| `formUuid`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | The UUID of the form this field belongs to.                                              | 123e4567-8d0a-4f63-9e6b-231fe2aa27fb                                                     |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the form field.                                                              |                                                                                          |
| `fieldDataJson`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | JSON configuration for this question, including type, mandatory, choices and conditions. |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | The sort order of the form field.                                                        |                                                                                          |
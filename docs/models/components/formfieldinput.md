# FormFieldInput

## Example Usage

```typescript
import { FormFieldInput } from "servicem8/models/components";

let value: FormFieldInput = {
  uuid: "123e4567-4839-4c1b-b5c8-2329bc0989bb",
  formUuid: "123e4567-5996-45d9-9804-2329ba56fcdb",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Unique identifier for this record                                                        | 123e4567-4839-4c1b-b5c8-2329bc0989bb                                                     |
| `active`                                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md)                 | :heavy_minus_sign:                                                                       | Record active/deleted flag.  Valid values are [0,1]                                      |                                                                                          |
| `formUuid`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | The UUID of the form this field belongs to.                                              | 123e4567-5996-45d9-9804-2329ba56fcdb                                                     |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the form field.                                                              |                                                                                          |
| `fieldDataJson`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | JSON configuration for this question, including type, mandatory, choices and conditions. |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | The sort order of the form field.                                                        |                                                                                          |
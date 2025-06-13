# FormFieldInput

## Example Usage

```typescript
import { FormFieldInput } from "servicem8/models/components";

let value: FormFieldInput = {
  uuid: "123e4567-2ec2-4859-a100-22e07d71c3eb",
  formUuid: "123e4567-3bea-45fa-9f40-22e07c8cfdeb",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for this record                                        | 123e4567-2ec2-4859-a100-22e07d71c3eb                                     |
| `active`                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag.  Valid values are [0,1]                      |                                                                          |
| `formUuid`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 123e4567-3bea-45fa-9f40-22e07c8cfdeb                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `fieldDataJson`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sortOrder`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
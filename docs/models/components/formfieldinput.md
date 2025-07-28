# FormFieldInput

## Example Usage

```typescript
import { FormFieldInput } from "servicem8/models/components";

let value: FormFieldInput = {
  uuid: "123e4567-b961-469e-b148-230c4a7bcdfb",
  formUuid: "123e4567-6ad5-4549-bff9-230c4efa452b",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for this record                                        | 123e4567-b961-469e-b148-230c4a7bcdfb                                     |
| `active`                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag.  Valid values are [0,1]                      |                                                                          |
| `formUuid`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 123e4567-6ad5-4549-bff9-230c4efa452b                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `fieldDataJson`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sortOrder`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
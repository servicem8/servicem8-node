# FormField

## Example Usage

```typescript
import { FormField } from "servicem8/models/components";

let value: FormField = {
  uuid: "123e4567-8ca5-4fe2-bdd7-22fb2f63234b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-5a3b-473f-b455-22fb28791ebb",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for this record                                        | 123e4567-8ca5-4fe2-bdd7-22fb2f63234b                                     |
| `active`                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag.  Valid values are [0,1]                      |                                                                          |
| `editDate`                                                               | *any*                                                                    | :heavy_minus_sign:                                                       | Timestamp at which record was last modified                              | 2025-07-01 12:00:00                                                      |
| `formUuid`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 123e4567-5a3b-473f-b455-22fb28791ebb                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `fieldDataJson`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sortOrder`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
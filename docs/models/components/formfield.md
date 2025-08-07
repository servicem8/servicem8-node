# FormField

## Example Usage

```typescript
import { FormField } from "servicem8/models/components";

let value: FormField = {
  uuid: "123e4567-1274-42cd-93a5-23184dfe250b",
  editDate: "2025-08-01 12:00:00",
  formUuid: "123e4567-7176-48fd-a951-2318458484eb",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for this record                                        | 123e4567-1274-42cd-93a5-23184dfe250b                                     |
| `active`                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag.  Valid values are [0,1]                      |                                                                          |
| `editDate`                                                               | *any*                                                                    | :heavy_minus_sign:                                                       | Timestamp at which record was last modified                              | 2025-08-01 12:00:00                                                      |
| `formUuid`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 123e4567-7176-48fd-a951-2318458484eb                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `fieldDataJson`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sortOrder`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
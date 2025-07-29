# FormFieldInput

## Example Usage

```typescript
import { FormFieldInput } from "servicem8/models/components";

let value: FormFieldInput = {
  uuid: "123e4567-282e-4ec5-a702-230feb38dcab",
  formUuid: "123e4567-d289-4641-8528-230fed7a7a6b",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for this record                                        | 123e4567-282e-4ec5-a702-230feb38dcab                                     |
| `active`                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag.  Valid values are [0,1]                      |                                                                          |
| `formUuid`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 123e4567-d289-4641-8528-230fed7a7a6b                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `fieldDataJson`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sortOrder`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
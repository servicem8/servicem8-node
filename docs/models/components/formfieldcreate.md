# FormFieldCreate

## Example Usage

```typescript
import { FormFieldCreate } from "servicem8/models/components";

let value: FormFieldCreate = {
  formUuid: "123e4567-d163-4b6f-8010-234d53f73f0b",
  uuid: "123e4567-18db-40aa-a36e-234d5b225f5b",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `formUuid`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | The UUID of the form this field belongs to.                                              | 123e4567-d163-4b6f-8010-234d53f73f0b                                                     |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the form field.                                                              |                                                                                          |
| `fieldDataJson`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | JSON configuration for this question, including type, mandatory, choices and conditions. |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | The sort order of the form field.                                                        |                                                                                          |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Unique identifier for this record                                                        | 123e4567-18db-40aa-a36e-234d5b225f5b                                                     |
# FormField

## Example Usage

```typescript
import { FormField } from "servicem8/models/components";

let value: FormField = {
  uuid: "123e4567-e442-4f25-8661-22b4d9db7a6b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  formUuid: "123e4567-4df7-4d9f-9c9b-22b4d8df1ccb",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Record UUID key                                                          | 123e4567-e442-4f25-8661-22b4d9db7a6b                                     |
| `active`                                                                 | [components.FormFieldActive](../../models/components/formfieldactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]             |                                                                          |
| `editDate`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | Record last modified timestamp                                           | YYYY-MM-DD HH:MM:SS                                                      |
| `formUuid`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | 123e4567-4df7-4d9f-9c9b-22b4d8df1ccb                                     |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `fieldDataJson`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `sortOrder`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
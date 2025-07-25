# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  form: {
    documentTemplateUuid: "123e4567-2786-49bc-9f7a-230b7a44e03b",
    uuid: "123e4567-fdf4-4390-9043-230b7cee270b",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Form                                             |
| `form`                                                       | [components.FormInput](../../models/components/forminput.md) | :heavy_check_mark:                                           | Form fields to update                                        |
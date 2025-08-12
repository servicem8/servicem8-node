# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  form: {
    documentTemplateUuid: "123e4567-a8ce-4ebb-b308-231cf8130d0b",
    uuid: "123e4567-700d-4ea9-82c1-231cfe5e819b",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Form                                             |
| `form`                                                       | [components.FormInput](../../models/components/forminput.md) | :heavy_check_mark:                                           | Form fields to update                                        |
# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  form: {
    uuid: "123e4567-69b3-4b0b-adbe-22b4db9d4c8b",
    documentTemplateUuid: "123e4567-ad99-4818-9f16-22b4de3ff6fb",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Form                                             |
| `form`                                                       | [components.FormInput](../../models/components/forminput.md) | :heavy_check_mark:                                           | Form fields to update                                        |
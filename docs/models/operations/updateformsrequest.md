# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  form: {
    documentTemplateUuid: "123e4567-bdc7-4d6a-976e-230b7cbcfa3b",
    uuid: "123e4567-313a-493a-89b6-230b7cad652b",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Form                                             |
| `form`                                                       | [components.FormInput](../../models/components/forminput.md) | :heavy_check_mark:                                           | Form fields to update                                        |
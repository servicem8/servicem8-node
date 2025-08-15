# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  form: {
    documentTemplateUuid: "123e4567-a57b-486a-932e-2320afc8ca0b",
    uuid: "123e4567-f890-4455-af8e-2320a1ef935b",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Form                                             |
| `form`                                                       | [components.FormInput](../../models/components/forminput.md) | :heavy_check_mark:                                           | Form fields to update                                        |
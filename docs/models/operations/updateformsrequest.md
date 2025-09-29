# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  formCreate: {
    documentTemplateUuid: "123e4567-5a5d-4994-8622-23497ea7b0cb",
    uuid: "123e4567-f0a8-4d7b-8433-234976c6eecb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Form                                               |
| `formCreate`                                                   | [components.FormCreate](../../models/components/formcreate.md) | :heavy_check_mark:                                             | Form fields to update                                          |
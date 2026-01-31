# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  formCreate: {
    documentTemplateUuid: "123e4567-8aac-43dc-8285-23c6f3676adb",
    uuid: "123e4567-bc68-4539-89ef-23c6f57891cb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Form                                               |
| `formCreate`                                                   | [components.FormCreate](../../models/components/formcreate.md) | :heavy_check_mark:                                             | Form fields to update                                          |
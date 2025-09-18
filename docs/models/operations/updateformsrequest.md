# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  formCreate: {
    documentTemplateUuid: "123e4567-8d01-440c-9198-2342248b38bb",
    uuid: "123e4567-f22f-491b-86dd-2342276c620b",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Form                                               |
| `formCreate`                                                   | [components.FormCreate](../../models/components/formcreate.md) | :heavy_check_mark:                                             | Form fields to update                                          |
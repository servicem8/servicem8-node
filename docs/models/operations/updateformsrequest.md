# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  formCreate: {
    documentTemplateUuid: "123e4567-d046-4b70-a4b1-23f940b4d8bb",
    uuid: "123e4567-17b5-4ac7-b4e1-23f945950bab",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Form                                               |
| `formCreate`                                                   | [components.FormCreate](../../models/components/formcreate.md) | :heavy_check_mark:                                             | Form fields to update                                          |
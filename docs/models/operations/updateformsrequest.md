# UpdateFormsRequest

## Example Usage

```typescript
import { UpdateFormsRequest } from "servicem8/models/operations";

let value: UpdateFormsRequest = {
  uuid: "feddab1b-64a7-45ae-b8b7-3858d302f9ad",
  formCreate: {
    documentTemplateUuid: "123e4567-61cf-4c4d-81ed-23467482069b",
    uuid: "123e4567-7678-4b2d-8879-23467b1f3fdb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Form                                               |
| `formCreate`                                                   | [components.FormCreate](../../models/components/formcreate.md) | :heavy_check_mark:                                             | Form fields to update                                          |
# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formField: {
    uuid: "123e4567-6d45-4889-9841-230b7b74b88b",
    formUuid: "123e4567-cb78-46aa-b7bd-230b74e95feb",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Form Field                                                 |
| `formField`                                                            | [components.FormFieldInput](../../models/components/formfieldinput.md) | :heavy_check_mark:                                                     | Form Field fields to update                                            |
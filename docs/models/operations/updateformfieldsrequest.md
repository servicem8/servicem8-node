# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formField: {
    uuid: "123e4567-fe6e-4975-9445-22bcb02d1dcb",
    formUuid: "123e4567-055b-4a97-b65e-22bcb483e49b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Form Field                                                 |
| `formField`                                                            | [components.FormFieldInput](../../models/components/formfieldinput.md) | :heavy_check_mark:                                                     | Form Field fields to update                                            |
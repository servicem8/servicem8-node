# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formField: {
    uuid: "123e4567-0eed-41ab-acdd-231cfe03a4cb",
    formUuid: "123e4567-3164-4da5-bcea-231cfabf8eeb",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Form Field                                                 |
| `formField`                                                            | [components.FormFieldInput](../../models/components/formfieldinput.md) | :heavy_check_mark:                                                     | Form Field fields to update                                            |
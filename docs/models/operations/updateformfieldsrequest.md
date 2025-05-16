# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formField: {
    uuid: "123e4567-9481-4a29-ba0b-22bdc6a8929b",
    formUuid: "123e4567-4610-4a7a-a017-22bdc725347b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Form Field                                                 |
| `formField`                                                            | [components.FormFieldInput](../../models/components/formfieldinput.md) | :heavy_check_mark:                                                     | Form Field fields to update                                            |
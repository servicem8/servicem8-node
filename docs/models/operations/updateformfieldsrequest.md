# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formFieldCreate: {
    formUuid: "123e4567-373a-4d3a-a4f7-23c6f62921db",
    uuid: "123e4567-d930-4102-9d4a-23c6f9ecd58b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Form Field                                                   |
| `formFieldCreate`                                                        | [components.FormFieldCreate](../../models/components/formfieldcreate.md) | :heavy_check_mark:                                                       | Form Field fields to update                                              |
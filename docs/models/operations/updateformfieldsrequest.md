# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formFieldCreate: {
    formUuid: "123e4567-5232-4cb2-9339-23eb2fc123fb",
    uuid: "123e4567-322b-492c-a16f-23eb2fcc005b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Form Field                                                   |
| `formFieldCreate`                                                        | [components.FormFieldCreate](../../models/components/formfieldcreate.md) | :heavy_check_mark:                                                       | Form Field fields to update                                              |
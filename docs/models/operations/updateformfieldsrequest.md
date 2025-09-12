# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formFieldCreate: {
    formUuid: "123e4567-0264-4484-a028-233c6636bceb",
    uuid: "123e4567-5ad4-4231-b9cd-233c67868c6b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Form Field                                                   |
| `formFieldCreate`                                                        | [components.FormFieldCreate](../../models/components/formfieldcreate.md) | :heavy_check_mark:                                                       | Form Field fields to update                                              |
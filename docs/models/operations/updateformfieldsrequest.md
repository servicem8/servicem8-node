# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formFieldCreate: {
    formUuid: "123e4567-9fb0-4ed5-a987-23d59a1a5e7b",
    uuid: "123e4567-b8e9-470d-aa64-23d59ffc194b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Form Field                                                   |
| `formFieldCreate`                                                        | [components.FormFieldCreate](../../models/components/formfieldcreate.md) | :heavy_check_mark:                                                       | Form Field fields to update                                              |
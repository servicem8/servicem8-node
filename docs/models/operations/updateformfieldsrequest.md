# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formFieldCreate: {
    formUuid: "123e4567-d163-4b6f-8010-234d53f73f0b",
    uuid: "123e4567-18db-40aa-a36e-234d5b225f5b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Form Field                                                   |
| `formFieldCreate`                                                        | [components.FormFieldCreate](../../models/components/formfieldcreate.md) | :heavy_check_mark:                                                       | Form Field fields to update                                              |
# UpdateFormFieldsRequest

## Example Usage

```typescript
import { UpdateFormFieldsRequest } from "servicem8/models/operations";

let value: UpdateFormFieldsRequest = {
  uuid: "b954c479-0928-4c00-86ff-8f29c8f7bbe5",
  formField: {
    uuid: "123e4567-8ef5-4c32-83a0-231b2a8e763b",
    formUuid: "123e4567-d9ea-40c4-b29d-231b2a5ca24b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Form Field                                                 |
| `formField`                                                            | [components.FormFieldInput](../../models/components/formfieldinput.md) | :heavy_check_mark:                                                     | Form Field fields to update                                            |
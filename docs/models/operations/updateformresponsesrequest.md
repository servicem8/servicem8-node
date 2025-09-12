# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-6950-4a3d-885b-233c6f1ba93b",
    staffUuid: "123e4567-3d64-46db-87a8-233c656e87bb",
    regardingObjectUuid: "123e4567-95cf-4b3c-a632-233c62da8c6b",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-866a-4a7a-8ffc-233c6ab2833b",
    documentAttachmentUuid: "123e4567-62e5-467a-a6e2-233c6f8c269b",
    assetUuid: "123e4567-6acf-4d17-bed2-233c685c0d3b",
    uuid: "123e4567-78bc-467b-8898-233c6d20d4cb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
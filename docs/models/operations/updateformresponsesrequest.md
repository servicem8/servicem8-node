# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-b576-48ea-8d84-233c6e8d85fb",
    staffUuid: "123e4567-8316-4fdf-9604-233c6af4412b",
    regardingObjectUuid: "123e4567-19a6-4439-b74d-233c6b4b8b4b",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-ff49-4dbc-b2b7-233c60e60f1b",
    documentAttachmentUuid: "123e4567-f670-491e-af68-233c67669a6b",
    assetUuid: "123e4567-f266-4ccf-ad3d-233c637da40b",
    uuid: "123e4567-2d64-4da7-bcf1-233c6aa3263b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
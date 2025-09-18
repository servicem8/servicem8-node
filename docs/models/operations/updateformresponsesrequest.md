# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-bb2c-47f8-938d-23422e8b9f8b",
    staffUuid: "123e4567-d092-4292-9d9e-234225e1cc4b",
    regardingObjectUuid: "123e4567-5256-463b-aa11-234222e2849b",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-7fdd-42aa-8bd5-2342240d7d6b",
    documentAttachmentUuid: "123e4567-5788-4234-bf1c-2342247e411b",
    assetUuid: "123e4567-6226-4383-b3c7-23422f03a50b",
    uuid: "123e4567-b640-40f1-a792-23422370ff4b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
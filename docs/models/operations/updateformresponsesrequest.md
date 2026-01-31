# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-a981-4548-83ff-23c6f194b3bb",
    staffUuid: "123e4567-b941-4519-b431-23c6f5ffe6fb",
    regardingObjectUuid: "123e4567-0398-438e-95fc-23c6fdb8519b",
    timestamp: "2026-01-01 12:00:00",
    formByStaffUuid: "123e4567-9e60-4750-b15c-23c6f95da17b",
    documentAttachmentUuid: "123e4567-2878-4340-8a11-23c6f282b16b",
    assetUuid: "123e4567-3daf-45a2-b972-23c6f010c54b",
    uuid: "123e4567-2807-4f3c-8af2-23c6fbee200b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
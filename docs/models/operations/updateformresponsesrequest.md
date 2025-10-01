# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-31b9-44fd-acde-234d5f99875b",
    staffUuid: "123e4567-8e79-4833-baa0-234d517f50cb",
    regardingObjectUuid: "123e4567-0c21-45bb-8954-234d56a7a09b",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-2acc-4827-99f3-234d5fde4dbb",
    documentAttachmentUuid: "123e4567-c90a-4c2b-a438-234d55c48bdb",
    assetUuid: "123e4567-3936-46b5-9f98-234d561991eb",
    uuid: "123e4567-fc2f-4cba-b142-234d5885867b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
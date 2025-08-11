# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-b679-4b03-b5f0-231cfba2130b",
    formUuid: "123e4567-e564-421d-b7da-231cf5ad25cb",
    staffUuid: "123e4567-2d05-4690-908e-231cf009aa8b",
    regardingObjectUuid: "123e4567-4d7b-4908-9bba-231cf56e8f8b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-dd19-4e99-9e4e-231cfdf4f17b",
    documentAttachmentUuid: "123e4567-95c2-4312-9cb6-231cf0edc79b",
    assetUuid: "123e4567-437f-4f14-9748-231cf921aa7b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
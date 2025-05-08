# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-bfea-47ba-b7cc-22bcb8cec74b",
    formUuid: "123e4567-8587-4072-b307-22bcb9aa700b",
    staffUuid: "123e4567-ea9e-4141-a765-22bcb50112db",
    regardingObjectUuid: "123e4567-3b72-4059-ad43-22bcbffce15b",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-cb4d-4aa9-8742-22bcb3e96dcb",
    documentAttachmentUuid: "123e4567-409e-4e21-8b76-22bcb73bc93b",
    assetUuid: "123e4567-9d59-4343-9212-22bcb611155b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
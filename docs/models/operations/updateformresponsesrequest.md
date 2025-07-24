# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-ea25-48c3-b77a-230a6b97fd6b",
    formUuid: "123e4567-3b18-473a-916d-230a66849b3b",
    staffUuid: "123e4567-26d4-4394-8dc2-230a625f51db",
    regardingObjectUuid: "123e4567-e396-4d97-9986-230a6ae7147b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-f556-45a5-83e2-230a6c3cf0fb",
    documentAttachmentUuid: "123e4567-1a1d-46ba-913c-230a6e89e1eb",
    assetUuid: "123e4567-746b-4270-bf4a-230a6a2b0adb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
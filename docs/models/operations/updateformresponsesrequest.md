# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-3b7c-420b-8ce5-230b7b03951b",
    formUuid: "123e4567-8a2e-458f-be85-230b79dc267b",
    staffUuid: "123e4567-2168-44ee-a8e3-230b718204ab",
    regardingObjectUuid: "123e4567-cdbb-4159-955e-230b7687cfcb",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-f700-4dc2-8946-230b7cdb46eb",
    documentAttachmentUuid: "123e4567-44d8-43ff-98c6-230b7b4993db",
    assetUuid: "123e4567-865b-4a3f-b74d-230b756abe1b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
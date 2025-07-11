# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-77fe-4689-ae8e-22fd807ca85b",
    formUuid: "123e4567-6af1-49fd-91ea-22fd84644d6b",
    staffUuid: "123e4567-62d5-4a3b-aa55-22fd81f148eb",
    regardingObjectUuid: "123e4567-0a81-47a5-89da-22fd812769db",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-ac3e-4a2d-8e0e-22fd8c08ab9b",
    documentAttachmentUuid: "123e4567-8a3e-4ad2-82ff-22fd8626814b",
    assetUuid: "123e4567-0877-437a-8186-22fd82ea81db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
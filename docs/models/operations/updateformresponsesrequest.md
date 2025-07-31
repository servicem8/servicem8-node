# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-1f0c-40e5-baf4-230fed1c492b",
    formUuid: "123e4567-822e-4582-a8f7-230fe084621b",
    staffUuid: "123e4567-f8e9-4a27-82f8-230fe6ad7d2b",
    regardingObjectUuid: "123e4567-2b23-445a-a1c2-230fea96f15b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-b070-4b8d-b144-230fed5857fb",
    documentAttachmentUuid: "123e4567-039e-4d91-9894-230fea3054bb",
    assetUuid: "123e4567-67b2-49d6-b813-230fe07916db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
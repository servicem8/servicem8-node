# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-5876-4270-b3a8-2312699490db",
    formUuid: "123e4567-440b-4229-9f37-23126856b5eb",
    staffUuid: "123e4567-2188-46bd-8c68-23126bc6ca0b",
    regardingObjectUuid: "123e4567-de85-4962-89f5-23126858921b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-9d29-4222-9622-23126d14817b",
    documentAttachmentUuid: "123e4567-5d76-4ee6-8bb6-23126226cb4b",
    assetUuid: "123e4567-3ab4-45b4-88b7-2312663d600b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
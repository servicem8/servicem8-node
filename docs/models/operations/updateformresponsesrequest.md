# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-e369-4ca8-8bdc-231b2a6695db",
    formUuid: "123e4567-4fd5-454e-943a-231b2b11256b",
    staffUuid: "123e4567-6756-4a77-9502-231b26fc66ab",
    regardingObjectUuid: "123e4567-bbb8-46e0-ae73-231b2382de6b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-ec8c-49fa-a299-231b2683524b",
    documentAttachmentUuid: "123e4567-84f0-4532-8503-231b299ed78b",
    assetUuid: "123e4567-c6da-4bbb-8c52-231b25539cab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
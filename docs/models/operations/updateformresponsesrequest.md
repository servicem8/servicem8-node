# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-6a7a-4a98-95ae-23312b62b7eb",
    formUuid: "123e4567-beb4-41e6-8929-233129f77f0b",
    staffUuid: "123e4567-4791-42aa-a5a9-23312ccab97b",
    regardingObjectUuid: "123e4567-363e-421e-8bc1-2331269e96db",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-5966-4b7d-8b7e-23312a32078b",
    documentAttachmentUuid: "123e4567-ef72-4ac3-b31a-233127cdf44b",
    assetUuid: "123e4567-2e09-483a-83a1-2331238f123b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
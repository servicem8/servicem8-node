# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-a468-4275-bfaa-231efa51881b",
    formUuid: "123e4567-faa0-407f-b84a-231efa051a4b",
    staffUuid: "123e4567-3147-4049-8a39-231efa09729b",
    regardingObjectUuid: "123e4567-a608-45f8-a0a6-231efdbe37eb",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-aaf9-422b-aeb8-231ef9009e6b",
    documentAttachmentUuid: "123e4567-94bc-465c-831c-231efd31584b",
    assetUuid: "123e4567-a394-482e-97ee-231ef3c9681b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
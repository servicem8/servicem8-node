# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-b2ee-4f35-ac57-2306f791027b",
    formUuid: "123e4567-abeb-4ee1-9ab2-2306f728238b",
    staffUuid: "123e4567-9d9a-4050-93c6-2306f1bbdf3b",
    regardingObjectUuid: "123e4567-4b00-451b-aae1-2306f619c0ab",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-7e07-4510-b18b-2306f510eb2b",
    documentAttachmentUuid: "123e4567-d98c-4ee3-8766-2306fbe8ca1b",
    assetUuid: "123e4567-f02f-4448-853d-2306fa50a4eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
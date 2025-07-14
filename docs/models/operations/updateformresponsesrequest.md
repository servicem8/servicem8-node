# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-b1f6-4571-a304-23004d15cc6b",
    formUuid: "123e4567-c982-43cc-b334-23004f41028b",
    staffUuid: "123e4567-52e6-45ba-b1c4-2300498c3c8b",
    regardingObjectUuid: "123e4567-4a27-4696-99cc-2300461e25ab",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-cb99-4950-99d2-23004686e64b",
    documentAttachmentUuid: "123e4567-3b6d-47d8-a610-23004b01f59b",
    assetUuid: "123e4567-755d-487d-bcbe-23004a36c54b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
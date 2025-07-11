# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-5395-4009-a6c6-22fc0396a34b",
    formUuid: "123e4567-d0b8-4058-a1ec-22fc0850764b",
    staffUuid: "123e4567-4cf7-428f-bfe3-22fc0861a58b",
    regardingObjectUuid: "123e4567-53fd-4665-bc07-22fc089236bb",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-4202-4dc3-93dc-22fc0187714b",
    documentAttachmentUuid: "123e4567-8320-421f-96a6-22fc0c118a5b",
    assetUuid: "123e4567-81f4-4ae4-99ce-22fc016e934b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
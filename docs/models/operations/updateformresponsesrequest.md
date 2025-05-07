# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-e143-453f-9b87-22bb0638486b",
    formUuid: "123e4567-055d-493d-9797-22bb0501611b",
    staffUuid: "123e4567-69d0-4ccc-b35a-22bb0c6d7e6b",
    regardingObjectUuid: "123e4567-81c5-4e47-9e22-22bb03336c7b",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-1558-4ee3-96e4-22bb0a93673b",
    documentAttachmentUuid: "123e4567-8767-45ec-bee6-22bb0a94743b",
    assetUuid: "123e4567-2c9a-4e79-83af-22bb0e6656db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
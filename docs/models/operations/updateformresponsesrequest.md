# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-d925-49a5-94d3-231d2c357ecb",
    formUuid: "123e4567-0319-44ae-bb99-231d276a9b4b",
    staffUuid: "123e4567-2aa4-4546-b6fa-231d226d23fb",
    regardingObjectUuid: "123e4567-9352-4951-8241-231d2d71a5ab",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-22b0-4ae5-b938-231d2c089c9b",
    documentAttachmentUuid: "123e4567-2455-48ed-81c7-231d29219f6b",
    assetUuid: "123e4567-798c-43f0-805a-231d2d51697b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
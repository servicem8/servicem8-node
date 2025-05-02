# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-1f15-4944-b378-22b70357872b",
    formUuid: "123e4567-65f1-4473-8cb2-22b707cb0ecb",
    staffUuid: "123e4567-0f71-470d-8f8f-22b70e94e8cb",
    regardingObjectUuid: "123e4567-7856-4192-a668-22b70beb15ab",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-0a60-4aaf-b9a3-22b70c0360fb",
    documentAttachmentUuid: "123e4567-1646-45bf-a2bc-22b70ba15cfb",
    assetUuid: "123e4567-501e-494d-9152-22b709b6fa8b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
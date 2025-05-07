# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-d7c0-47bc-9c2a-22bcbad7421b",
    formUuid: "123e4567-16df-4b4a-b896-22bcb2589fcb",
    staffUuid: "123e4567-e99a-428b-a23f-22bcb253c73b",
    regardingObjectUuid: "123e4567-fb87-47cb-8dee-22bcb01c083b",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-fb17-4f67-8bb3-22bcbf1d225b",
    documentAttachmentUuid: "123e4567-8b70-42ab-a5d8-22bcbd0db2cb",
    assetUuid: "123e4567-eb7d-468f-819d-22bcb1decbeb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
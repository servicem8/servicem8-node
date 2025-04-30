# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-263b-439e-8c0b-22b566b0a7bb",
    formUuid: "123e4567-2de8-4a00-b3db-22b560d297ab",
    staffUuid: "123e4567-f556-410d-8559-22b56ed6bb8b",
    regardingObjectUuid: "123e4567-d072-463f-8293-22b565f6306b",
    timestamp: "2025-04-01 12:00:00",
    formByStaffUuid: "123e4567-eb5e-4110-af66-22b56b85ee1b",
    documentAttachmentUuid: "123e4567-4e62-4d1f-8fd4-22b56ca181ab",
    assetUuid: "123e4567-19f0-4021-9953-22b562091d9b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
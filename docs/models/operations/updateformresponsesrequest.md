# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-e2c5-4751-afbd-233122712a2b",
    formUuid: "123e4567-011e-45bf-b9f8-2331261f927b",
    staffUuid: "123e4567-1a3b-47f0-a5d2-233128d9183b",
    regardingObjectUuid: "123e4567-676f-4319-8733-23312bd1387b",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-3182-4fc5-a180-23312167dbab",
    documentAttachmentUuid: "123e4567-1161-42d9-a0dd-23312ecbb46b",
    assetUuid: "123e4567-4a96-4031-9e2a-23312d60045b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
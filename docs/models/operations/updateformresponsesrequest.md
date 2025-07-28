# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-a4f5-47df-b0cd-230c474d41cb",
    formUuid: "123e4567-9ab7-4cdd-8aac-230c40b4669b",
    staffUuid: "123e4567-9441-4af3-a7db-230c4cdf44db",
    regardingObjectUuid: "123e4567-cc84-456b-b412-230c43de148b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-08cb-4f6c-95a3-230c499270bb",
    documentAttachmentUuid: "123e4567-d76a-4eff-a36f-230c4cb4865b",
    assetUuid: "123e4567-acb4-4dc3-ad75-230c4c63287b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
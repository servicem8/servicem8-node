# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-438d-46d0-8c0b-231d2950482b",
    formUuid: "123e4567-f3ce-4551-bd37-231d2514e6bb",
    staffUuid: "123e4567-76f1-42ad-8427-231d25ba773b",
    regardingObjectUuid: "123e4567-20f6-4431-89bc-231d2a15ec0b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-78ef-481c-82ae-231d211e840b",
    documentAttachmentUuid: "123e4567-2c4b-49a2-abd3-231d2f36670b",
    assetUuid: "123e4567-c626-4223-bfbd-231d2b49e6bb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
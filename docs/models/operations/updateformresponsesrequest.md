# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-f4a0-4079-8ffc-22b6c589ac6b",
    formUuid: "123e4567-d98d-43eb-8579-22b6cdafde7b",
    staffUuid: "123e4567-64e7-4f39-a736-22b6c692d34b",
    regardingObjectUuid: "123e4567-74f3-4c64-8575-22b6c2bfe59b",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-900e-4949-84ff-22b6ca9fa97b",
    documentAttachmentUuid: "123e4567-c872-46ed-82c1-22b6cd08f5bb",
    assetUuid: "123e4567-d2c0-43ee-98e9-22b6c939f3cb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
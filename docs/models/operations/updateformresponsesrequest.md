# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-bc69-48bb-abef-230b7169338b",
    formUuid: "123e4567-b4c3-4b1d-8fce-230b74f75c1b",
    staffUuid: "123e4567-78fa-4a11-8229-230b7f14478b",
    regardingObjectUuid: "123e4567-d9fb-45e7-abf4-230b7fa88c4b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-7ff6-4e24-85e6-230b7828ab4b",
    documentAttachmentUuid: "123e4567-ab54-4174-9957-230b73044b9b",
    assetUuid: "123e4567-bffb-4265-b99a-230b729ee5db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-6202-46bd-86ac-231109b62e7b",
    formUuid: "123e4567-274e-4ec4-8cc4-23110ff71adb",
    staffUuid: "123e4567-6e10-42d7-94cc-23110dc85b8b",
    regardingObjectUuid: "123e4567-19af-474e-83ef-231104fe924b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-9a95-4663-bc09-23110e7baadb",
    documentAttachmentUuid: "123e4567-eb56-4f49-8926-23110044dbdb",
    assetUuid: "123e4567-4ef3-4b7c-9328-23110d1ca3eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
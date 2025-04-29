# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-cdbd-4bee-bbca-22b4d938e7cb",
    formUuid: "123e4567-574e-455e-aa17-22b4dbcc051b",
    staffUuid: "123e4567-f1a2-4083-ac86-22b4d3d9ad2b",
    regardingObjectUuid: "123e4567-7900-4739-ad0d-22b4dbf72a8b",
    timestamp: "YYYY-MM-DD HH:MM:SS",
    formByStaffUuid: "123e4567-542e-4845-9ad5-22b4d0bf00eb",
    documentAttachmentUuid: "123e4567-65fd-48dd-bb7a-22b4d0c032fb",
    assetUuid: "123e4567-be51-4f9b-914f-22b4d35c4c0b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
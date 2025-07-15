# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-f336-4b50-a93d-2301206cf38b",
    formUuid: "123e4567-e755-415e-b1f2-2301253f535b",
    staffUuid: "123e4567-6f28-4707-a987-23012b3c1dcb",
    regardingObjectUuid: "123e4567-c6e1-436a-a5af-2301202bb2fb",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-9ec0-4895-8592-23012ad8d1db",
    documentAttachmentUuid: "123e4567-2ec9-41f4-851c-23012adc7d1b",
    assetUuid: "123e4567-d20d-403a-960d-230125b4449b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-263e-465a-92c0-22b4d555791b",
    formUuid: "123e4567-f212-4cf1-9f88-22b4dbfe0f2b",
    staffUuid: "123e4567-40bf-49f9-9729-22b4d87ff09b",
    regardingObjectUuid: "123e4567-5de7-4527-8e83-22b4d118cb4b",
    timestamp: "YYYY-MM-DD HH:MM:SS",
    formByStaffUuid: "123e4567-63c9-457a-8390-22b4d45d88bb",
    documentAttachmentUuid: "123e4567-77cf-4ae8-b0c3-22b4d634345b",
    assetUuid: "123e4567-690e-4ff2-97d1-22b4d7c1090b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
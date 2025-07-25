# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-bd97-4aa7-88ec-230a653c87cb",
    formUuid: "123e4567-38a3-4b9f-97d8-230a6bfaf8ab",
    staffUuid: "123e4567-2fa5-44c4-a607-230a6d93d38b",
    regardingObjectUuid: "123e4567-ff1c-438d-8579-230a6a3a8ecb",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-3ede-44e1-b637-230a6e0a19eb",
    documentAttachmentUuid: "123e4567-d100-4458-9340-230a6708769b",
    assetUuid: "123e4567-c4b7-488b-aae4-230a6f96c4eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
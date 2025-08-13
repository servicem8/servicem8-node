# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-a454-4b06-9145-231ef36d807b",
    formUuid: "123e4567-56a4-4870-ab05-231ef1b7614b",
    staffUuid: "123e4567-9a91-489d-86d5-231ef5e2033b",
    regardingObjectUuid: "123e4567-479a-42ab-8e22-231eff92093b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-11af-4c66-bb51-231efaedc91b",
    documentAttachmentUuid: "123e4567-5136-4baf-9368-231ef60a7b8b",
    assetUuid: "123e4567-4617-4cf4-b2e7-231efb7b24bb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
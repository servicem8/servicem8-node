# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-e9b4-42b3-b4f4-2308e8f73f8b",
    formUuid: "123e4567-9737-4041-83df-2308e25423fb",
    staffUuid: "123e4567-7796-48a2-8115-2308e2603bdb",
    regardingObjectUuid: "123e4567-9a66-4275-b49a-2308eda5e52b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-e048-4e13-96d8-2308e0762b7b",
    documentAttachmentUuid: "123e4567-6325-4009-98ef-2308e45a7d3b",
    assetUuid: "123e4567-9c73-437a-82ea-2308e904267b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-ed7c-4354-9060-22fb2e8ed1fb",
    formUuid: "123e4567-a57c-4887-8a4b-22fb25ed5f5b",
    staffUuid: "123e4567-c218-4e43-b129-22fb22079b8b",
    regardingObjectUuid: "123e4567-abd1-4a6e-837d-22fb23fc832b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-e6bb-4d67-8ef9-22fb29e5d03b",
    documentAttachmentUuid: "123e4567-308e-49d8-b8a7-22fb2291079b",
    assetUuid: "123e4567-24c4-47e8-8d15-22fb22c12d5b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
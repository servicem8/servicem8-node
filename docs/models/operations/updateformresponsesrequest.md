# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-c264-401f-b671-22bcb7431cab",
    formUuid: "123e4567-3907-43f0-b6f7-22bcb898f0bb",
    staffUuid: "123e4567-720d-4082-9600-22bcb7cd451b",
    regardingObjectUuid: "123e4567-8627-4fab-87ca-22bcb1b18e3b",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-137c-40f6-9caf-22bcbe8c1ebb",
    documentAttachmentUuid: "123e4567-c739-4649-97d0-22bcb0da7eeb",
    assetUuid: "123e4567-be86-40bd-a11d-22bcb99a1a3b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
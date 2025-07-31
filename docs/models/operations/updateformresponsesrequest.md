# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-14df-4ee2-ac15-23110e4bcb2b",
    formUuid: "123e4567-9bef-450f-8eb9-23110ff7d23b",
    staffUuid: "123e4567-51f2-4bda-8feb-23110fa2cc0b",
    regardingObjectUuid: "123e4567-5b4d-48dd-9886-231107db4fbb",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-860d-4e06-9af4-231104375a2b",
    documentAttachmentUuid: "123e4567-8553-4ec9-896d-23110de81ecb",
    assetUuid: "123e4567-9c1b-438f-b692-23110632e31b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
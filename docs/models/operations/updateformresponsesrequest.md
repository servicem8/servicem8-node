# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-178a-4fa4-a1bb-2329bd3bc29b",
    formUuid: "123e4567-0db8-4602-b04f-2329b9b2d90b",
    staffUuid: "123e4567-721a-4295-82dc-2329bfa38f9b",
    regardingObjectUuid: "123e4567-d4a5-4382-94f8-2329bdb8d27b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-c7eb-4b86-9853-2329bcc0713b",
    documentAttachmentUuid: "123e4567-7e82-42cb-861a-2329b4d22dbb",
    assetUuid: "123e4567-c58c-40cf-8836-2329be5e6fab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
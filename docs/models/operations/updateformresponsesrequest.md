# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-e83a-41c7-aebb-230042c1c67b",
    formUuid: "123e4567-1cb2-4cc0-9e6b-2300435cd50b",
    staffUuid: "123e4567-de90-4531-8ac0-23004a4c6ecb",
    regardingObjectUuid: "123e4567-34e6-4984-b1ea-23004791b4ab",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-f244-4140-9e72-230048c9c2bb",
    documentAttachmentUuid: "123e4567-9c5b-438f-9301-23004e9ef27b",
    assetUuid: "123e4567-8403-4494-84b3-230046a20a1b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
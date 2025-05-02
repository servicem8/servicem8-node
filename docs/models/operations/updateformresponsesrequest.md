# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-d29b-4121-80f4-22b6c7f4a67b",
    formUuid: "123e4567-ee37-48bb-91a4-22b6c7e4bddb",
    staffUuid: "123e4567-da14-4829-a92a-22b6c3a9357b",
    regardingObjectUuid: "123e4567-c7ac-405b-b94e-22b6c928a6bb",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-edcc-42d9-99cb-22b6c6ab11bb",
    documentAttachmentUuid: "123e4567-c6ce-4685-8706-22b6cdecddbb",
    assetUuid: "123e4567-acf3-4b45-bf1a-22b6c30638bb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
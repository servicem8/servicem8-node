# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-d831-4664-8cc6-230b7a9a9e9b",
    formUuid: "123e4567-fcae-4b8e-98cd-230b7cdff13b",
    staffUuid: "123e4567-0e73-4477-b05c-230b7027c5bb",
    regardingObjectUuid: "123e4567-1eb8-4c8b-9f72-230b756a097b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-777d-4bf4-98b3-230b70128d2b",
    documentAttachmentUuid: "123e4567-4dfd-4de7-810d-230b7f27e70b",
    assetUuid: "123e4567-d15b-4d73-bfb7-230b7f06f88b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
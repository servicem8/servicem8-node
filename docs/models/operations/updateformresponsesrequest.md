# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-1e83-4060-a755-22b569492d9b",
    formUuid: "123e4567-b75d-4d05-9fda-22b56adf755b",
    staffUuid: "123e4567-b8ff-4587-bd1d-22b5622d8d3b",
    regardingObjectUuid: "123e4567-f4c5-4ea0-a16e-22b560b6193b",
    timestamp: "YYYY-MM-DD HH:MM:SS",
    formByStaffUuid: "123e4567-2bb8-473d-8a44-22b56b019fbb",
    documentAttachmentUuid: "123e4567-fec8-4db4-aa85-22b56f2ed78b",
    assetUuid: "123e4567-8177-4df5-8963-22b56e11bcab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
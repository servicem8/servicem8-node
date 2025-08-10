# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-e81c-42e3-883f-23184da922ab",
    formUuid: "123e4567-81c9-4ec8-8b74-23184950285b",
    staffUuid: "123e4567-48df-45dc-b17d-2318473f5fab",
    regardingObjectUuid: "123e4567-ec42-486b-8ca0-231848701c6b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-d016-4843-be68-2318414eb5db",
    documentAttachmentUuid: "123e4567-d520-4055-8a6e-231848ac8bfb",
    assetUuid: "123e4567-d306-406b-9371-2318482b7a7b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
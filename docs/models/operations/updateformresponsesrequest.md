# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-649d-4d7c-9e0d-2302f430d40b",
    formUuid: "123e4567-9127-4e2b-8e94-2302fd62c26b",
    staffUuid: "123e4567-c463-4590-9082-2302fefb23bb",
    regardingObjectUuid: "123e4567-a1be-4da1-a01c-2302fd546cfb",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-5587-4416-938c-2302f8aeffeb",
    documentAttachmentUuid: "123e4567-54c3-490d-a2e4-2302f70dc2fb",
    assetUuid: "123e4567-3097-4422-917e-2302fa4853bb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
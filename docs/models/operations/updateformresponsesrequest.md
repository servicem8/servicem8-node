# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-0db3-47dc-808c-230b78c7c11b",
    formUuid: "123e4567-5645-453b-b92e-230b7190d97b",
    staffUuid: "123e4567-c09d-4b02-9a46-230b7855bfeb",
    regardingObjectUuid: "123e4567-2ab2-4051-a31d-230b74d7a85b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-2f3d-4699-be4e-230b7589550b",
    documentAttachmentUuid: "123e4567-871f-424b-810a-230b7666c1eb",
    assetUuid: "123e4567-2bca-44bc-b6c5-230b7ab50deb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
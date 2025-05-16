# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-fd25-4681-9406-22bdcfc0fefb",
    formUuid: "123e4567-dff2-4c87-823d-22bdc6e963bb",
    staffUuid: "123e4567-36e8-432c-8e89-22bdc162ebcb",
    regardingObjectUuid: "123e4567-e5e3-4ce3-b838-22bdcb009b1b",
    timestamp: "2025-05-01 12:00:00",
    formByStaffUuid: "123e4567-8643-430a-a154-22bdcf5d32eb",
    documentAttachmentUuid: "123e4567-5053-4e62-9391-22bdcaa3b3cb",
    assetUuid: "123e4567-86be-4865-98e3-22bdc5fb64ab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
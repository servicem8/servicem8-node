# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-6939-4c51-95e5-230c4ace83ab",
    formUuid: "123e4567-ee8f-4802-8aba-230c4c2c987b",
    staffUuid: "123e4567-8d40-4ad6-912e-230c4eeff03b",
    regardingObjectUuid: "123e4567-ae90-44c3-a9a1-230c4343812b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-756f-4865-9d11-230c47a2ee3b",
    documentAttachmentUuid: "123e4567-d253-4ec4-b091-230c4e4e9d8b",
    assetUuid: "123e4567-3dc6-4c94-a748-230c4a7872bb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
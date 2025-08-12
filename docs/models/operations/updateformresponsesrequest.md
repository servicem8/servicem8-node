# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-c1c0-43de-a458-231cf546b3db",
    formUuid: "123e4567-13bd-4222-808e-231cf4528d7b",
    staffUuid: "123e4567-66a5-42c0-afc2-231cfae078cb",
    regardingObjectUuid: "123e4567-4261-45ea-ac35-231cff87eb4b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-a66f-4c84-a627-231cf0db035b",
    documentAttachmentUuid: "123e4567-2abb-4501-9fcc-231cf8e0387b",
    assetUuid: "123e4567-0132-4525-b323-231cf041951b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
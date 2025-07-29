# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-ad60-4df1-abc5-230fec51fd4b",
    formUuid: "123e4567-d3f0-443d-b161-230fe16cea4b",
    staffUuid: "123e4567-bc9d-4784-a6fc-230fe3e6565b",
    regardingObjectUuid: "123e4567-0b7b-4e78-a942-230fe8e5b11b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-77df-4d49-8e6e-230fedf9c94b",
    documentAttachmentUuid: "123e4567-04cd-4fa2-abe7-230fe307a05b",
    assetUuid: "123e4567-d00b-4e17-924b-230feb357cfb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
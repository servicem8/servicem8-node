# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-7138-4598-85b0-2313fe2fb1cb",
    formUuid: "123e4567-fb7e-4314-98d9-2313f93a7cdb",
    staffUuid: "123e4567-b74d-4b71-b371-2313fcacd85b",
    regardingObjectUuid: "123e4567-7fcf-4285-9d93-2313f8c5a55b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-0900-410f-9306-2313f7d2f2eb",
    documentAttachmentUuid: "123e4567-7705-4f5c-9b1e-2313f5eed51b",
    assetUuid: "123e4567-24bb-41c5-8924-2313f002e2db",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
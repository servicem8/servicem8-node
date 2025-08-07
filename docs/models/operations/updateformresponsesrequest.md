# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-6348-4546-bf5e-23184785ee3b",
    formUuid: "123e4567-57e6-4384-a5f2-231840059b6b",
    staffUuid: "123e4567-e622-4792-ab07-23184817725b",
    regardingObjectUuid: "123e4567-6801-4fb9-bae4-23184864a33b",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-010d-4889-8771-2318486913ab",
    documentAttachmentUuid: "123e4567-774f-4764-b0aa-23184b873abb",
    assetUuid: "123e4567-68c1-48b8-9103-231849b302eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
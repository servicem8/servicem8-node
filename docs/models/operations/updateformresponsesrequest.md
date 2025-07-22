# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-3514-4f9d-971f-2308e69c405b",
    formUuid: "123e4567-bada-4c6e-b055-2308ee35365b",
    staffUuid: "123e4567-1fb5-4578-b912-2308e8a4491b",
    regardingObjectUuid: "123e4567-22e8-4ec1-bcf8-2308eb1804db",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-4763-420e-a38b-2308e05a6f1b",
    documentAttachmentUuid: "123e4567-5a20-4a77-9dcc-2308e2e616fb",
    assetUuid: "123e4567-d7b7-40b8-bf8b-2308e1e2bceb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
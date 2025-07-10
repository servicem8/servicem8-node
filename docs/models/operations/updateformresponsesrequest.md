# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-5a42-4939-a886-22fc054319ab",
    formUuid: "123e4567-e58b-4ba4-952e-22fc06f48efb",
    staffUuid: "123e4567-dbf8-4827-a658-22fc081adecb",
    regardingObjectUuid: "123e4567-0073-41bb-ba9b-22fc03854afb",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-1231-4b22-87b5-22fc01a02eeb",
    documentAttachmentUuid: "123e4567-413c-4558-bea0-22fc03d2a67b",
    assetUuid: "123e4567-2a2a-424d-95c0-22fc0b5468fb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-932e-4c6d-a319-231b23158c1b",
    formUuid: "123e4567-a9eb-4f1f-bde6-231b25462c7b",
    staffUuid: "123e4567-3693-483f-87bd-231b2c63e94b",
    regardingObjectUuid: "123e4567-492a-497a-b916-231b21d016db",
    timestamp: "2025-08-01 12:00:00",
    formByStaffUuid: "123e4567-aef3-4b9c-a2e0-231b268ab92b",
    documentAttachmentUuid: "123e4567-95d4-4470-83e7-231b20aab61b",
    assetUuid: "123e4567-f36c-440b-ac4c-231b285d1a7b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
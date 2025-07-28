# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-77d7-4d9d-a478-230ef10e911b",
    formUuid: "123e4567-1c87-4fea-9f57-230ef3fa0cbb",
    staffUuid: "123e4567-237b-4c00-bd1d-230efc8b8e9b",
    regardingObjectUuid: "123e4567-8170-45e4-860e-230ef557465b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-5439-40fd-a45a-230ef114eaab",
    documentAttachmentUuid: "123e4567-400e-42c2-94a3-230ef4d2861b",
    assetUuid: "123e4567-e3a3-4bb3-8005-230ef47a6bfb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
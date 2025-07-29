# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-a6a1-4594-bcf5-230fe759e42b",
    formUuid: "123e4567-083b-4d6d-be57-230fe5dedb7b",
    staffUuid: "123e4567-6dcf-465e-b21d-230fe95a108b",
    regardingObjectUuid: "123e4567-e1f8-44f5-8e6b-230fe48e5f5b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-f321-48b3-a9b6-230fe516ed8b",
    documentAttachmentUuid: "123e4567-12ce-4fd6-93c7-230fee727f6b",
    assetUuid: "123e4567-5f1c-4fa5-8b58-230fe37d912b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
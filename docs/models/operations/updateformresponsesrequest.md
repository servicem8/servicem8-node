# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-d318-43fc-97b9-23f94923e6eb",
    staffUuid: "123e4567-a1d2-4aa7-89a9-23f94f550c2b",
    regardingObjectUuid: "123e4567-c625-40d3-8f48-23f94acf41bb",
    timestamp: "2026-03-01 12:00:00",
    formByStaffUuid: "123e4567-d3c9-4778-8bfa-23f94ad8ecab",
    documentAttachmentUuid: "123e4567-47b9-4310-8001-23f9437ae7bb",
    assetUuid: "123e4567-1af8-418f-b168-23f94802b51b",
    uuid: "123e4567-0582-4709-b0f3-23f9436261cb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
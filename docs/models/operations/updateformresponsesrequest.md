# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-2fba-474c-a845-23482bb9ff6b",
    staffUuid: "123e4567-8778-4800-b843-23482fcf1e8b",
    regardingObjectUuid: "123e4567-9e21-4bc3-8496-23482efb2b8b",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-8598-42e3-9034-23482582d59b",
    documentAttachmentUuid: "123e4567-c67a-4190-b7c0-23482d179fdb",
    assetUuid: "123e4567-1e85-407a-abbd-2348254ac6bb",
    uuid: "123e4567-dec1-45f9-a6cf-234823801f1b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
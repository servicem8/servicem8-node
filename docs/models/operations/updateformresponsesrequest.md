# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-d06d-4646-9131-23eb2e29f06b",
    staffUuid: "123e4567-e831-4dd2-b5a5-23eb24192d0b",
    regardingObjectUuid: "123e4567-07a8-4fb9-ac39-23eb29d31c5b",
    timestamp: "2026-03-01 12:00:00",
    formByStaffUuid: "123e4567-2700-428d-9cdb-23eb29d9d9eb",
    documentAttachmentUuid: "123e4567-9fdf-4201-beb5-23eb28b28cfb",
    assetUuid: "123e4567-0384-4950-8301-23eb2709156b",
    uuid: "123e4567-8e46-4b7a-93cf-23eb242cdbcb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
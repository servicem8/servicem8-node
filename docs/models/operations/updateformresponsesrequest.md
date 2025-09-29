# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-02a5-4a47-8be4-23497fccf08b",
    staffUuid: "123e4567-0d1d-4f26-bd96-23497081c1ab",
    regardingObjectUuid: "123e4567-399b-47bc-b339-234972c7aecb",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-cf59-4125-bbd8-234970417e6b",
    documentAttachmentUuid: "123e4567-7455-442d-89cd-23497d4bd7fb",
    assetUuid: "123e4567-9c33-4abd-ac5b-234979ea70fb",
    uuid: "123e4567-05d0-4847-a28b-2349715d56fb",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
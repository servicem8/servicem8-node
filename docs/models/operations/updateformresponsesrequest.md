# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-5d6e-46b8-9040-23482f210e5b",
    staffUuid: "123e4567-a51d-44b5-bd63-23482f0d988b",
    regardingObjectUuid: "123e4567-3e64-47af-aacb-23482d3186ab",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-5cd8-4983-a973-2348299aaa0b",
    documentAttachmentUuid: "123e4567-dbee-4c3d-8aa6-234820170e4b",
    assetUuid: "123e4567-8cf0-4497-8398-23482453babb",
    uuid: "123e4567-9a69-45a3-9f68-23482f68c69b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
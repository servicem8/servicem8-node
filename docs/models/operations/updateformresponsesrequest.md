# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-7ecb-404a-93d1-23eb2068d52b",
    staffUuid: "123e4567-71c0-42e6-95d0-23eb28392c0b",
    regardingObjectUuid: "123e4567-5ed2-42ea-9766-23eb2e25ae4b",
    timestamp: "2026-03-01 12:00:00",
    formByStaffUuid: "123e4567-c98e-4b4c-af14-23eb208ae88b",
    documentAttachmentUuid: "123e4567-ca2b-4b3f-a96e-23eb27a6f81b",
    assetUuid: "123e4567-1cb4-4076-bb4c-23eb22910b8b",
    uuid: "123e4567-d216-4398-b2c7-23eb2895369b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
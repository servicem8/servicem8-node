# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-78cf-4e11-a1cd-23d5991ca39b",
    staffUuid: "123e4567-8241-4297-8626-23d59035985b",
    regardingObjectUuid: "123e4567-494e-40e0-8245-23d5936b37ab",
    timestamp: "2026-02-01 12:00:00",
    formByStaffUuid: "123e4567-6517-4112-96da-23d596e4167b",
    documentAttachmentUuid: "123e4567-95fc-457e-8217-23d592f8269b",
    assetUuid: "123e4567-f4eb-42a1-adc3-23d59527431b",
    uuid: "123e4567-212e-4f00-a16e-23d59c357f3b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
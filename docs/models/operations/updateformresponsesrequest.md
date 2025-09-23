# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponseCreate: {
    formUuid: "123e4567-5ee9-4642-b245-23467b39337b",
    staffUuid: "123e4567-aacc-40eb-87e5-23467d1e943b",
    regardingObjectUuid: "123e4567-342f-424a-b075-234672a3fc7b",
    timestamp: "2025-09-01 12:00:00",
    formByStaffUuid: "123e4567-b976-46f5-b916-23467b8b328b",
    documentAttachmentUuid: "123e4567-8930-43e9-a3f7-23467a04d47b",
    assetUuid: "123e4567-725c-44dc-8851-234676efde3b",
    uuid: "123e4567-6f73-4e5b-8587-23467f17724b",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Form Response                                                      |
| `formResponseCreate`                                                           | [components.FormResponseCreate](../../models/components/formresponsecreate.md) | :heavy_check_mark:                                                             | Form Response fields to update                                                 |
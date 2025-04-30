# UpdateFormResponsesRequest

## Example Usage

```typescript
import { UpdateFormResponsesRequest } from "servicem8/models/operations";

let value: UpdateFormResponsesRequest = {
  uuid: "6c90f8b4-df87-458b-875e-3f2bbee4d921",
  formResponse: {
    uuid: "123e4567-024e-4250-9822-22b56afc00cb",
    formUuid: "123e4567-1e14-4c13-a435-22b569e7dc2b",
    staffUuid: "123e4567-2580-470c-8d9a-22b564eee6bb",
    regardingObjectUuid: "123e4567-b41c-402a-a045-22b5682fb03b",
    timestamp: "YYYY-MM-DD HH:MM:SS",
    formByStaffUuid: "123e4567-bf53-4e81-9e8c-22b56eba351b",
    documentAttachmentUuid: "123e4567-3cca-4411-98f4-22b56eb105db",
    assetUuid: "123e4567-cdee-4fda-a386-22b56a1c6dcb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Form Response                                                    |
| `formResponse`                                                               | [components.FormResponseInput](../../models/components/formresponseinput.md) | :heavy_check_mark:                                                           | Form Response fields to update                                               |
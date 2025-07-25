# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-d831-4664-8cc6-230b7a9a9e9b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-fcae-4b8e-98cd-230b7cdff13b",
  staffUuid: "123e4567-0e73-4477-b05c-230b7027c5bb",
  regardingObjectUuid: "123e4567-1eb8-4c8b-9f72-230b756a097b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-777d-4bf4-98b3-230b70128d2b",
  documentAttachmentUuid: "123e4567-4dfd-4de7-810d-230b7f27e70b",
  assetUuid: "123e4567-d15b-4d73-bfb7-230b7f06f88b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-d831-4664-8cc6-230b7a9a9e9b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-fcae-4b8e-98cd-230b7cdff13b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0e73-4477-b05c-230b7027c5bb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1eb8-4c8b-9f72-230b756a097b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-777d-4bf4-98b3-230b70128d2b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4dfd-4de7-810d-230b7f27e70b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d15b-4d73-bfb7-230b7f06f88b                                           |
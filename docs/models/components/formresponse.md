# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-b679-4b03-b5f0-231cfba2130b",
  editDate: "2025-08-01 12:00:00",
  formUuid: "123e4567-e564-421d-b7da-231cf5ad25cb",
  staffUuid: "123e4567-2d05-4690-908e-231cf009aa8b",
  regardingObjectUuid: "123e4567-4d7b-4908-9bba-231cf56e8f8b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-dd19-4e99-9e4e-231cfdf4f17b",
  documentAttachmentUuid: "123e4567-95c2-4312-9cb6-231cf0edc79b",
  assetUuid: "123e4567-437f-4f14-9748-231cf921aa7b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-b679-4b03-b5f0-231cfba2130b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-08-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e564-421d-b7da-231cf5ad25cb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2d05-4690-908e-231cf009aa8b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4d7b-4908-9bba-231cf56e8f8b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-dd19-4e99-9e4e-231cfdf4f17b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-95c2-4312-9cb6-231cf0edc79b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-437f-4f14-9748-231cf921aa7b                                           |
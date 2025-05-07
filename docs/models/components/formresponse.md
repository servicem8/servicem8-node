# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-d7c0-47bc-9c2a-22bcbad7421b",
  editDate: "2025-05-01 12:00:00",
  formUuid: "123e4567-16df-4b4a-b896-22bcb2589fcb",
  staffUuid: "123e4567-e99a-428b-a23f-22bcb253c73b",
  regardingObjectUuid: "123e4567-fb87-47cb-8dee-22bcb01c083b",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-fb17-4f67-8bb3-22bcbf1d225b",
  documentAttachmentUuid: "123e4567-8b70-42ab-a5d8-22bcbd0db2cb",
  assetUuid: "123e4567-eb7d-468f-819d-22bcb1decbeb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-d7c0-47bc-9c2a-22bcbad7421b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-05-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-16df-4b4a-b896-22bcb2589fcb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e99a-428b-a23f-22bcb253c73b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-fb87-47cb-8dee-22bcb01c083b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-fb17-4f67-8bb3-22bcbf1d225b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8b70-42ab-a5d8-22bcbd0db2cb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-eb7d-468f-819d-22bcb1decbeb                                           |
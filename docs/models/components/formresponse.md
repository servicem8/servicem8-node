# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-e2c5-4751-afbd-233122712a2b",
  editDate: "2025-09-01 12:00:00",
  formUuid: "123e4567-011e-45bf-b9f8-2331261f927b",
  staffUuid: "123e4567-1a3b-47f0-a5d2-233128d9183b",
  regardingObjectUuid: "123e4567-676f-4319-8733-23312bd1387b",
  timestamp: "2025-09-01 12:00:00",
  formByStaffUuid: "123e4567-3182-4fc5-a180-23312167dbab",
  documentAttachmentUuid: "123e4567-1161-42d9-a0dd-23312ecbb46b",
  assetUuid: "123e4567-4a96-4031-9e2a-23312d60045b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-e2c5-4751-afbd-233122712a2b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-09-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-011e-45bf-b9f8-2331261f927b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1a3b-47f0-a5d2-233128d9183b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-676f-4319-8733-23312bd1387b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | JSON array of form answers captured at submission time.                        |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-09-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3182-4fc5-a180-23312167dbab                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1161-42d9-a0dd-23312ecbb46b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4a96-4031-9e2a-23312d60045b                                           |
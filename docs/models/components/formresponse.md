# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-263b-439e-8c0b-22b566b0a7bb",
  editDate: "2025-04-01 12:00:00",
  formUuid: "123e4567-2de8-4a00-b3db-22b560d297ab",
  staffUuid: "123e4567-f556-410d-8559-22b56ed6bb8b",
  regardingObjectUuid: "123e4567-d072-463f-8293-22b565f6306b",
  timestamp: "2025-04-01 12:00:00",
  formByStaffUuid: "123e4567-eb5e-4110-af66-22b56b85ee1b",
  documentAttachmentUuid: "123e4567-4e62-4d1f-8fd4-22b56ca181ab",
  assetUuid: "123e4567-19f0-4021-9953-22b562091d9b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-263b-439e-8c0b-22b566b0a7bb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-04-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2de8-4a00-b3db-22b560d297ab                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f556-410d-8559-22b56ed6bb8b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d072-463f-8293-22b565f6306b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-04-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-eb5e-4110-af66-22b56b85ee1b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4e62-4d1f-8fd4-22b56ca181ab                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-19f0-4021-9953-22b562091d9b                                           |
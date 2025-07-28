# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-a4f5-47df-b0cd-230c474d41cb",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-9ab7-4cdd-8aac-230c40b4669b",
  staffUuid: "123e4567-9441-4af3-a7db-230c4cdf44db",
  regardingObjectUuid: "123e4567-cc84-456b-b412-230c43de148b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-08cb-4f6c-95a3-230c499270bb",
  documentAttachmentUuid: "123e4567-d76a-4eff-a36f-230c4cb4865b",
  assetUuid: "123e4567-acb4-4dc3-ad75-230c4c63287b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-a4f5-47df-b0cd-230c474d41cb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9ab7-4cdd-8aac-230c40b4669b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9441-4af3-a7db-230c4cdf44db                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-cc84-456b-b412-230c43de148b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-08cb-4f6c-95a3-230c499270bb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d76a-4eff-a36f-230c4cb4865b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-acb4-4dc3-ad75-230c4c63287b                                           |
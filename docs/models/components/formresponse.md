# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-6a7a-4a98-95ae-23312b62b7eb",
  editDate: "2025-09-01 12:00:00",
  formUuid: "123e4567-beb4-41e6-8929-233129f77f0b",
  staffUuid: "123e4567-4791-42aa-a5a9-23312ccab97b",
  regardingObjectUuid: "123e4567-363e-421e-8bc1-2331269e96db",
  timestamp: "2025-09-01 12:00:00",
  formByStaffUuid: "123e4567-5966-4b7d-8b7e-23312a32078b",
  documentAttachmentUuid: "123e4567-ef72-4ac3-b31a-233127cdf44b",
  assetUuid: "123e4567-2e09-483a-83a1-2331238f123b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-6a7a-4a98-95ae-23312b62b7eb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-09-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-beb4-41e6-8929-233129f77f0b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4791-42aa-a5a9-23312ccab97b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-363e-421e-8bc1-2331269e96db                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | JSON array of form answers captured at submission time.                        |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-09-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5966-4b7d-8b7e-23312a32078b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ef72-4ac3-b31a-233127cdf44b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2e09-483a-83a1-2331238f123b                                           |
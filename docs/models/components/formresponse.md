# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-5395-4009-a6c6-22fc0396a34b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-d0b8-4058-a1ec-22fc0850764b",
  staffUuid: "123e4567-4cf7-428f-bfe3-22fc0861a58b",
  regardingObjectUuid: "123e4567-53fd-4665-bc07-22fc089236bb",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-4202-4dc3-93dc-22fc0187714b",
  documentAttachmentUuid: "123e4567-8320-421f-96a6-22fc0c118a5b",
  assetUuid: "123e4567-81f4-4ae4-99ce-22fc016e934b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-5395-4009-a6c6-22fc0396a34b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d0b8-4058-a1ec-22fc0850764b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4cf7-428f-bfe3-22fc0861a58b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-53fd-4665-bc07-22fc089236bb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4202-4dc3-93dc-22fc0187714b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8320-421f-96a6-22fc0c118a5b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-81f4-4ae4-99ce-22fc016e934b                                           |
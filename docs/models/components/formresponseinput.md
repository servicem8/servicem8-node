# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-e369-4ca8-8bdc-231b2a6695db",
  formUuid: "123e4567-4fd5-454e-943a-231b2b11256b",
  staffUuid: "123e4567-6756-4a77-9502-231b26fc66ab",
  regardingObjectUuid: "123e4567-bbb8-46e0-ae73-231b2382de6b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-ec8c-49fa-a299-231b2683524b",
  documentAttachmentUuid: "123e4567-84f0-4532-8503-231b299ed78b",
  assetUuid: "123e4567-c6da-4bbb-8c52-231b25539cab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-e369-4ca8-8bdc-231b2a6695db                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4fd5-454e-943a-231b2b11256b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6756-4a77-9502-231b26fc66ab                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-bbb8-46e0-ae73-231b2382de6b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ec8c-49fa-a299-231b2683524b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-84f0-4532-8503-231b299ed78b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c6da-4bbb-8c52-231b25539cab                                           |
# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-77fe-4689-ae8e-22fd807ca85b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-6af1-49fd-91ea-22fd84644d6b",
  staffUuid: "123e4567-62d5-4a3b-aa55-22fd81f148eb",
  regardingObjectUuid: "123e4567-0a81-47a5-89da-22fd812769db",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-ac3e-4a2d-8e0e-22fd8c08ab9b",
  documentAttachmentUuid: "123e4567-8a3e-4ad2-82ff-22fd8626814b",
  assetUuid: "123e4567-0877-437a-8186-22fd82ea81db",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-77fe-4689-ae8e-22fd807ca85b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6af1-49fd-91ea-22fd84644d6b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-62d5-4a3b-aa55-22fd81f148eb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0a81-47a5-89da-22fd812769db                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ac3e-4a2d-8e0e-22fd8c08ab9b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8a3e-4ad2-82ff-22fd8626814b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0877-437a-8186-22fd82ea81db                                           |
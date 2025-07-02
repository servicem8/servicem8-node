# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-8ff3-4af0-89df-22f45a8e851b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-2b83-45bf-9128-22f45b1fea0b",
  staffUuid: "123e4567-7b53-4b6c-bb07-22f45413575b",
  regardingObjectUuid: "123e4567-ac73-4c67-9281-22f4529ccbab",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-3898-4b85-ad49-22f451ea40fb",
  documentAttachmentUuid: "123e4567-0fb3-4f49-b282-22f4587d637b",
  assetUuid: "123e4567-deba-4390-ac70-22f45d7a243b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-8ff3-4af0-89df-22f45a8e851b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2b83-45bf-9128-22f45b1fea0b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7b53-4b6c-bb07-22f45413575b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ac73-4c67-9281-22f4529ccbab                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3898-4b85-ad49-22f451ea40fb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0fb3-4f49-b282-22f4587d637b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-deba-4390-ac70-22f45d7a243b                                           |
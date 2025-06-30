# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-253e-45ef-b032-22ef246669db",
  formUuid: "123e4567-9baf-4da0-87bb-22ef2feda8fb",
  staffUuid: "123e4567-0b7e-47ae-97ae-22ef265db60b",
  regardingObjectUuid: "123e4567-2f26-4ab9-8a39-22ef2a52b11b",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-465f-4548-b245-22ef2ec4781b",
  documentAttachmentUuid: "123e4567-6cfe-4c59-93c6-22ef2bd4947b",
  assetUuid: "123e4567-4a78-43f1-85c4-22ef2be430cb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-253e-45ef-b032-22ef246669db                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9baf-4da0-87bb-22ef2feda8fb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0b7e-47ae-97ae-22ef265db60b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2f26-4ab9-8a39-22ef2a52b11b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-465f-4548-b245-22ef2ec4781b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6cfe-4c59-93c6-22ef2bd4947b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4a78-43f1-85c4-22ef2be430cb                                           |
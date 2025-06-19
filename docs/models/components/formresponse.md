# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-1a82-4155-9b32-22e6e55cdb2b",
  editDate: "2025-06-01 12:00:00",
  formUuid: "123e4567-8785-448e-becc-22e6e404a4ab",
  staffUuid: "123e4567-07c6-4880-a9f8-22e6e434719b",
  regardingObjectUuid: "123e4567-771f-40fa-8020-22e6e38d139b",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-0f0c-4842-9922-22e6eee22c4b",
  documentAttachmentUuid: "123e4567-77ef-4ff7-9c75-22e6eec29c0b",
  assetUuid: "123e4567-9eff-4287-a055-22e6e7a0040b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-1a82-4155-9b32-22e6e55cdb2b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-06-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8785-448e-becc-22e6e404a4ab                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-07c6-4880-a9f8-22e6e434719b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-771f-40fa-8020-22e6e38d139b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0f0c-4842-9922-22e6eee22c4b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-77ef-4ff7-9c75-22e6eec29c0b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9eff-4287-a055-22e6e7a0040b                                           |
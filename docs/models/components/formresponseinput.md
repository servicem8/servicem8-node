# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-bfea-47ba-b7cc-22bcb8cec74b",
  formUuid: "123e4567-8587-4072-b307-22bcb9aa700b",
  staffUuid: "123e4567-ea9e-4141-a765-22bcb50112db",
  regardingObjectUuid: "123e4567-3b72-4059-ad43-22bcbffce15b",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-cb4d-4aa9-8742-22bcb3e96dcb",
  documentAttachmentUuid: "123e4567-409e-4e21-8b76-22bcb73bc93b",
  assetUuid: "123e4567-9d59-4343-9212-22bcb611155b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-bfea-47ba-b7cc-22bcb8cec74b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8587-4072-b307-22bcb9aa700b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ea9e-4141-a765-22bcb50112db                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3b72-4059-ad43-22bcbffce15b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-cb4d-4aa9-8742-22bcb3e96dcb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-409e-4e21-8b76-22bcb73bc93b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9d59-4343-9212-22bcb611155b                                           |
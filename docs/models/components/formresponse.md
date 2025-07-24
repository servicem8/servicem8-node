# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-ea25-48c3-b77a-230a6b97fd6b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-3b18-473a-916d-230a66849b3b",
  staffUuid: "123e4567-26d4-4394-8dc2-230a625f51db",
  regardingObjectUuid: "123e4567-e396-4d97-9986-230a6ae7147b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-f556-45a5-83e2-230a6c3cf0fb",
  documentAttachmentUuid: "123e4567-1a1d-46ba-913c-230a6e89e1eb",
  assetUuid: "123e4567-746b-4270-bf4a-230a6a2b0adb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-ea25-48c3-b77a-230a6b97fd6b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3b18-473a-916d-230a66849b3b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-26d4-4394-8dc2-230a625f51db                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e396-4d97-9986-230a6ae7147b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f556-45a5-83e2-230a6c3cf0fb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1a1d-46ba-913c-230a6e89e1eb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-746b-4270-bf4a-230a6a2b0adb                                           |
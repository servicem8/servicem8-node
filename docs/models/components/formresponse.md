# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-3b7c-420b-8ce5-230b7b03951b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-8a2e-458f-be85-230b79dc267b",
  staffUuid: "123e4567-2168-44ee-a8e3-230b718204ab",
  regardingObjectUuid: "123e4567-cdbb-4159-955e-230b7687cfcb",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-f700-4dc2-8946-230b7cdb46eb",
  documentAttachmentUuid: "123e4567-44d8-43ff-98c6-230b7b4993db",
  assetUuid: "123e4567-865b-4a3f-b74d-230b756abe1b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-3b7c-420b-8ce5-230b7b03951b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8a2e-458f-be85-230b79dc267b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2168-44ee-a8e3-230b718204ab                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-cdbb-4159-955e-230b7687cfcb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f700-4dc2-8946-230b7cdb46eb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-44d8-43ff-98c6-230b7b4993db                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-865b-4a3f-b74d-230b756abe1b                                           |
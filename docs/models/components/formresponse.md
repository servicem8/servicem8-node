# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-7138-4598-85b0-2313fe2fb1cb",
  editDate: "2025-08-01 12:00:00",
  formUuid: "123e4567-fb7e-4314-98d9-2313f93a7cdb",
  staffUuid: "123e4567-b74d-4b71-b371-2313fcacd85b",
  regardingObjectUuid: "123e4567-7fcf-4285-9d93-2313f8c5a55b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-0900-410f-9306-2313f7d2f2eb",
  documentAttachmentUuid: "123e4567-7705-4f5c-9b1e-2313f5eed51b",
  assetUuid: "123e4567-24bb-41c5-8924-2313f002e2db",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-7138-4598-85b0-2313fe2fb1cb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-08-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-fb7e-4314-98d9-2313f93a7cdb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-b74d-4b71-b371-2313fcacd85b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7fcf-4285-9d93-2313f8c5a55b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0900-410f-9306-2313f7d2f2eb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7705-4f5c-9b1e-2313f5eed51b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-24bb-41c5-8924-2313f002e2db                                           |
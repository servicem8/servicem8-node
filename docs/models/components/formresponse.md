# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-6202-46bd-86ac-231109b62e7b",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-274e-4ec4-8cc4-23110ff71adb",
  staffUuid: "123e4567-6e10-42d7-94cc-23110dc85b8b",
  regardingObjectUuid: "123e4567-19af-474e-83ef-231104fe924b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-9a95-4663-bc09-23110e7baadb",
  documentAttachmentUuid: "123e4567-eb56-4f49-8926-23110044dbdb",
  assetUuid: "123e4567-4ef3-4b7c-9328-23110d1ca3eb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-6202-46bd-86ac-231109b62e7b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-274e-4ec4-8cc4-23110ff71adb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6e10-42d7-94cc-23110dc85b8b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-19af-474e-83ef-231104fe924b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9a95-4663-bc09-23110e7baadb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-eb56-4f49-8926-23110044dbdb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4ef3-4b7c-9328-23110d1ca3eb                                           |
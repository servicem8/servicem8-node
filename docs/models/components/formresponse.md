# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-fd12-49fb-8583-231effa8fe0b",
  editDate: "2025-08-01 12:00:00",
  formUuid: "123e4567-451a-4faf-8ff6-231ef169b08b",
  staffUuid: "123e4567-f109-4827-b2ec-231efec5f9fb",
  regardingObjectUuid: "123e4567-4ad0-46cb-835c-231efdbd802b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-3b61-491a-8663-231ef858e92b",
  documentAttachmentUuid: "123e4567-f058-4ca0-ad41-231ef8e2434b",
  assetUuid: "123e4567-a757-40e9-bffd-231ef6d962fb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-fd12-49fb-8583-231effa8fe0b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-08-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-451a-4faf-8ff6-231ef169b08b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f109-4827-b2ec-231efec5f9fb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4ad0-46cb-835c-231efdbd802b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3b61-491a-8663-231ef858e92b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f058-4ca0-ad41-231ef8e2434b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-a757-40e9-bffd-231ef6d962fb                                           |
# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-bd97-4aa7-88ec-230a653c87cb",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-38a3-4b9f-97d8-230a6bfaf8ab",
  staffUuid: "123e4567-2fa5-44c4-a607-230a6d93d38b",
  regardingObjectUuid: "123e4567-ff1c-438d-8579-230a6a3a8ecb",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-3ede-44e1-b637-230a6e0a19eb",
  documentAttachmentUuid: "123e4567-d100-4458-9340-230a6708769b",
  assetUuid: "123e4567-c4b7-488b-aae4-230a6f96c4eb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-bd97-4aa7-88ec-230a653c87cb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-38a3-4b9f-97d8-230a6bfaf8ab                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2fa5-44c4-a607-230a6d93d38b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ff1c-438d-8579-230a6a3a8ecb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3ede-44e1-b637-230a6e0a19eb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d100-4458-9340-230a6708769b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c4b7-488b-aae4-230a6f96c4eb                                           |
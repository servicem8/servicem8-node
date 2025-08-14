# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-e268-4869-9b14-231fed1a1f3b",
  editDate: "2025-08-01 12:00:00",
  formUuid: "123e4567-173a-43d3-91b6-231fef4e850b",
  staffUuid: "123e4567-a5dd-4df4-80b6-231fe0ce779b",
  regardingObjectUuid: "123e4567-644f-4eb7-a212-231feabb6d9b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-5e8c-4b47-bf1b-231fe6c2bd4b",
  documentAttachmentUuid: "123e4567-7b2f-4acc-b196-231fe8678b0b",
  assetUuid: "123e4567-3e90-41b5-b924-231fe740c2fb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-e268-4869-9b14-231fed1a1f3b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-08-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-173a-43d3-91b6-231fef4e850b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-a5dd-4df4-80b6-231fe0ce779b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-644f-4eb7-a212-231feabb6d9b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5e8c-4b47-bf1b-231fe6c2bd4b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7b2f-4acc-b196-231fe8678b0b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3e90-41b5-b924-231fe740c2fb                                           |
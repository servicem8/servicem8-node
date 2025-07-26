# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-6939-4c51-95e5-230c4ace83ab",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-ee8f-4802-8aba-230c4c2c987b",
  staffUuid: "123e4567-8d40-4ad6-912e-230c4eeff03b",
  regardingObjectUuid: "123e4567-ae90-44c3-a9a1-230c4343812b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-756f-4865-9d11-230c47a2ee3b",
  documentAttachmentUuid: "123e4567-d253-4ec4-b091-230c4e4e9d8b",
  assetUuid: "123e4567-3dc6-4c94-a748-230c4a7872bb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-6939-4c51-95e5-230c4ace83ab                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ee8f-4802-8aba-230c4c2c987b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8d40-4ad6-912e-230c4eeff03b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ae90-44c3-a9a1-230c4343812b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-756f-4865-9d11-230c47a2ee3b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d253-4ec4-b091-230c4e4e9d8b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3dc6-4c94-a748-230c4a7872bb                                           |
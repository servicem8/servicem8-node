# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-fd25-4681-9406-22bdcfc0fefb",
  editDate: "2025-05-01 12:00:00",
  formUuid: "123e4567-dff2-4c87-823d-22bdc6e963bb",
  staffUuid: "123e4567-36e8-432c-8e89-22bdc162ebcb",
  regardingObjectUuid: "123e4567-e5e3-4ce3-b838-22bdcb009b1b",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-8643-430a-a154-22bdcf5d32eb",
  documentAttachmentUuid: "123e4567-5053-4e62-9391-22bdcaa3b3cb",
  assetUuid: "123e4567-86be-4865-98e3-22bdc5fb64ab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-fd25-4681-9406-22bdcfc0fefb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-05-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-dff2-4c87-823d-22bdc6e963bb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-36e8-432c-8e89-22bdc162ebcb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e5e3-4ce3-b838-22bdcb009b1b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8643-430a-a154-22bdcf5d32eb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5053-4e62-9391-22bdcaa3b3cb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-86be-4865-98e3-22bdc5fb64ab                                           |
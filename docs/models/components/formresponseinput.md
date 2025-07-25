# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-0db3-47dc-808c-230b78c7c11b",
  formUuid: "123e4567-5645-453b-b92e-230b7190d97b",
  staffUuid: "123e4567-c09d-4b02-9a46-230b7855bfeb",
  regardingObjectUuid: "123e4567-2ab2-4051-a31d-230b74d7a85b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-2f3d-4699-be4e-230b7589550b",
  documentAttachmentUuid: "123e4567-871f-424b-810a-230b7666c1eb",
  assetUuid: "123e4567-2bca-44bc-b6c5-230b7ab50deb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-0db3-47dc-808c-230b78c7c11b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5645-453b-b92e-230b7190d97b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c09d-4b02-9a46-230b7855bfeb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2ab2-4051-a31d-230b74d7a85b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2f3d-4699-be4e-230b7589550b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-871f-424b-810a-230b7666c1eb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2bca-44bc-b6c5-230b7ab50deb                                           |
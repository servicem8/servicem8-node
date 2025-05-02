# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-1f15-4944-b378-22b70357872b",
  formUuid: "123e4567-65f1-4473-8cb2-22b707cb0ecb",
  staffUuid: "123e4567-0f71-470d-8f8f-22b70e94e8cb",
  regardingObjectUuid: "123e4567-7856-4192-a668-22b70beb15ab",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-0a60-4aaf-b9a3-22b70c0360fb",
  documentAttachmentUuid: "123e4567-1646-45bf-a2bc-22b70ba15cfb",
  assetUuid: "123e4567-501e-494d-9152-22b709b6fa8b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-1f15-4944-b378-22b70357872b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-65f1-4473-8cb2-22b707cb0ecb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0f71-470d-8f8f-22b70e94e8cb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7856-4192-a668-22b70beb15ab                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0a60-4aaf-b9a3-22b70c0360fb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1646-45bf-a2bc-22b70ba15cfb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-501e-494d-9152-22b709b6fa8b                                           |
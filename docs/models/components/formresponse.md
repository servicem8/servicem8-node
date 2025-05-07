# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-e143-453f-9b87-22bb0638486b",
  editDate: "2025-05-01 12:00:00",
  formUuid: "123e4567-055d-493d-9797-22bb0501611b",
  staffUuid: "123e4567-69d0-4ccc-b35a-22bb0c6d7e6b",
  regardingObjectUuid: "123e4567-81c5-4e47-9e22-22bb03336c7b",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-1558-4ee3-96e4-22bb0a93673b",
  documentAttachmentUuid: "123e4567-8767-45ec-bee6-22bb0a94743b",
  assetUuid: "123e4567-2c9a-4e79-83af-22bb0e6656db",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-e143-453f-9b87-22bb0638486b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-05-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-055d-493d-9797-22bb0501611b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-69d0-4ccc-b35a-22bb0c6d7e6b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-81c5-4e47-9e22-22bb03336c7b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1558-4ee3-96e4-22bb0a93673b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8767-45ec-bee6-22bb0a94743b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2c9a-4e79-83af-22bb0e6656db                                           |
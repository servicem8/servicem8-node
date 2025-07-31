# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-1f0c-40e5-baf4-230fed1c492b",
  formUuid: "123e4567-822e-4582-a8f7-230fe084621b",
  staffUuid: "123e4567-f8e9-4a27-82f8-230fe6ad7d2b",
  regardingObjectUuid: "123e4567-2b23-445a-a1c2-230fea96f15b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-b070-4b8d-b144-230fed5857fb",
  documentAttachmentUuid: "123e4567-039e-4d91-9894-230fea3054bb",
  assetUuid: "123e4567-67b2-49d6-b813-230fe07916db",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-1f0c-40e5-baf4-230fed1c492b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-822e-4582-a8f7-230fe084621b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f8e9-4a27-82f8-230fe6ad7d2b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2b23-445a-a1c2-230fea96f15b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-b070-4b8d-b144-230fed5857fb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-039e-4d91-9894-230fea3054bb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-67b2-49d6-b813-230fe07916db                                           |
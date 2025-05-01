# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-f4a0-4079-8ffc-22b6c589ac6b",
  formUuid: "123e4567-d98d-43eb-8579-22b6cdafde7b",
  staffUuid: "123e4567-64e7-4f39-a736-22b6c692d34b",
  regardingObjectUuid: "123e4567-74f3-4c64-8575-22b6c2bfe59b",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-900e-4949-84ff-22b6ca9fa97b",
  documentAttachmentUuid: "123e4567-c872-46ed-82c1-22b6cd08f5bb",
  assetUuid: "123e4567-d2c0-43ee-98e9-22b6c939f3cb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-f4a0-4079-8ffc-22b6c589ac6b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d98d-43eb-8579-22b6cdafde7b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-64e7-4f39-a736-22b6c692d34b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-74f3-4c64-8575-22b6c2bfe59b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-900e-4949-84ff-22b6ca9fa97b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c872-46ed-82c1-22b6cd08f5bb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d2c0-43ee-98e9-22b6c939f3cb                                           |
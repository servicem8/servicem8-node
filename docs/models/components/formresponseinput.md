# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-438d-46d0-8c0b-231d2950482b",
  formUuid: "123e4567-f3ce-4551-bd37-231d2514e6bb",
  staffUuid: "123e4567-76f1-42ad-8427-231d25ba773b",
  regardingObjectUuid: "123e4567-20f6-4431-89bc-231d2a15ec0b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-78ef-481c-82ae-231d211e840b",
  documentAttachmentUuid: "123e4567-2c4b-49a2-abd3-231d2f36670b",
  assetUuid: "123e4567-c626-4223-bfbd-231d2b49e6bb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-438d-46d0-8c0b-231d2950482b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f3ce-4551-bd37-231d2514e6bb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-76f1-42ad-8427-231d25ba773b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-20f6-4431-89bc-231d2a15ec0b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-78ef-481c-82ae-231d211e840b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2c4b-49a2-abd3-231d2f36670b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c626-4223-bfbd-231d2b49e6bb                                           |
# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-cfc4-4919-bfb2-22ec7b7fc2eb",
  formUuid: "123e4567-c166-4dad-a50b-22ec7f9c247b",
  staffUuid: "123e4567-de85-43c6-8ae0-22ec729d5a4b",
  regardingObjectUuid: "123e4567-6aa7-4455-bc94-22ec79e6145b",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-6862-48f9-91cb-22ec71a1216b",
  documentAttachmentUuid: "123e4567-4dd6-4dbd-8fe8-22ec77fbd03b",
  assetUuid: "123e4567-5359-4cb6-93d1-22ec7a613aab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-cfc4-4919-bfb2-22ec7b7fc2eb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c166-4dad-a50b-22ec7f9c247b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-de85-43c6-8ae0-22ec729d5a4b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6aa7-4455-bc94-22ec79e6145b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6862-48f9-91cb-22ec71a1216b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4dd6-4dbd-8fe8-22ec77fbd03b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5359-4cb6-93d1-22ec7a613aab                                           |
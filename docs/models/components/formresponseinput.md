# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-b71b-4022-9f7e-22fb20a0763b",
  formUuid: "123e4567-44c2-45b7-9a26-22fb2915d7db",
  staffUuid: "123e4567-4cd8-4c93-89d7-22fb2295123b",
  regardingObjectUuid: "123e4567-c2e0-48e8-af1b-22fb22fa422b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-3ff2-4319-b0d3-22fb25fbfb0b",
  documentAttachmentUuid: "123e4567-6086-49aa-a3c1-22fb201d51cb",
  assetUuid: "123e4567-6554-4382-98b7-22fb2b788bcb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-b71b-4022-9f7e-22fb20a0763b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-44c2-45b7-9a26-22fb2915d7db                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4cd8-4c93-89d7-22fb2295123b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c2e0-48e8-af1b-22fb22fa422b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3ff2-4319-b0d3-22fb25fbfb0b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6086-49aa-a3c1-22fb201d51cb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6554-4382-98b7-22fb2b788bcb                                           |
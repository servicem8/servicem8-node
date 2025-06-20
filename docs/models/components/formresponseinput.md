# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-81d9-4a84-af63-22e82e44109b",
  formUuid: "123e4567-74bf-4b20-b4c4-22e82e07d40b",
  staffUuid: "123e4567-21fe-4f59-b90d-22e82e806dbb",
  regardingObjectUuid: "123e4567-d9df-4190-8b05-22e825116a4b",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-1d04-447c-9a77-22e82242d55b",
  documentAttachmentUuid: "123e4567-2737-4fcf-a863-22e82d885deb",
  assetUuid: "123e4567-24a0-43dc-a23a-22e82df9d18b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-81d9-4a84-af63-22e82e44109b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-74bf-4b20-b4c4-22e82e07d40b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-21fe-4f59-b90d-22e82e806dbb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d9df-4190-8b05-22e825116a4b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1d04-447c-9a77-22e82242d55b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2737-4fcf-a863-22e82d885deb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-24a0-43dc-a23a-22e82df9d18b                                           |
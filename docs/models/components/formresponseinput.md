# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-b2ee-4f35-ac57-2306f791027b",
  formUuid: "123e4567-abeb-4ee1-9ab2-2306f728238b",
  staffUuid: "123e4567-9d9a-4050-93c6-2306f1bbdf3b",
  regardingObjectUuid: "123e4567-4b00-451b-aae1-2306f619c0ab",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-7e07-4510-b18b-2306f510eb2b",
  documentAttachmentUuid: "123e4567-d98c-4ee3-8766-2306fbe8ca1b",
  assetUuid: "123e4567-f02f-4448-853d-2306fa50a4eb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-b2ee-4f35-ac57-2306f791027b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-abeb-4ee1-9ab2-2306f728238b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9d9a-4050-93c6-2306f1bbdf3b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4b00-451b-aae1-2306f619c0ab                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7e07-4510-b18b-2306f510eb2b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d98c-4ee3-8766-2306fbe8ca1b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f02f-4448-853d-2306fa50a4eb                                           |
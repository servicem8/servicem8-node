# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-0cad-4a3a-b50a-22ed3d48d9ab",
  formUuid: "123e4567-65b2-4af7-ac9b-22ed3e13bebb",
  staffUuid: "123e4567-bd13-4596-a1cc-22ed369e434b",
  regardingObjectUuid: "123e4567-cd47-4e30-b363-22ed36dd20fb",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-aef3-42bb-b43d-22ed3ce8112b",
  documentAttachmentUuid: "123e4567-1f4f-49fd-8d54-22ed3235f52b",
  assetUuid: "123e4567-eb4e-4266-86b0-22ed30792eeb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-0cad-4a3a-b50a-22ed3d48d9ab                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-65b2-4af7-ac9b-22ed3e13bebb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-bd13-4596-a1cc-22ed369e434b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-cd47-4e30-b363-22ed36dd20fb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-aef3-42bb-b43d-22ed3ce8112b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1f4f-49fd-8d54-22ed3235f52b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-eb4e-4266-86b0-22ed30792eeb                                           |
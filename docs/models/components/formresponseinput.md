# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-5184-47a5-b93d-22d9d427494b",
  formUuid: "123e4567-8360-4b10-a732-22d9dcdc161b",
  staffUuid: "123e4567-ca2e-46b1-9735-22d9d1be432b",
  regardingObjectUuid: "123e4567-8f82-48b4-a3b6-22d9d2b667fb",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-6ace-4097-88ca-22d9d1f1748b",
  documentAttachmentUuid: "123e4567-9a45-4df6-bcc8-22d9dfc5b59b",
  assetUuid: "123e4567-49b7-4795-96f3-22d9d4399e3b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-5184-47a5-b93d-22d9d427494b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8360-4b10-a732-22d9dcdc161b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ca2e-46b1-9735-22d9d1be432b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8f82-48b4-a3b6-22d9d2b667fb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6ace-4097-88ca-22d9d1f1748b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9a45-4df6-bcc8-22d9dfc5b59b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-49b7-4795-96f3-22d9d4399e3b                                           |
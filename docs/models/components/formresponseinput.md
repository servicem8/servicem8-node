# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-77d7-4d9d-a478-230ef10e911b",
  formUuid: "123e4567-1c87-4fea-9f57-230ef3fa0cbb",
  staffUuid: "123e4567-237b-4c00-bd1d-230efc8b8e9b",
  regardingObjectUuid: "123e4567-8170-45e4-860e-230ef557465b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-5439-40fd-a45a-230ef114eaab",
  documentAttachmentUuid: "123e4567-400e-42c2-94a3-230ef4d2861b",
  assetUuid: "123e4567-e3a3-4bb3-8005-230ef47a6bfb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-77d7-4d9d-a478-230ef10e911b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1c87-4fea-9f57-230ef3fa0cbb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-237b-4c00-bd1d-230efc8b8e9b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8170-45e4-860e-230ef557465b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5439-40fd-a45a-230ef114eaab                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-400e-42c2-94a3-230ef4d2861b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e3a3-4bb3-8005-230ef47a6bfb                                           |
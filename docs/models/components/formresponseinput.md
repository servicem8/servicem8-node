# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-a6a1-4594-bcf5-230fe759e42b",
  formUuid: "123e4567-083b-4d6d-be57-230fe5dedb7b",
  staffUuid: "123e4567-6dcf-465e-b21d-230fe95a108b",
  regardingObjectUuid: "123e4567-e1f8-44f5-8e6b-230fe48e5f5b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-f321-48b3-a9b6-230fe516ed8b",
  documentAttachmentUuid: "123e4567-12ce-4fd6-93c7-230fee727f6b",
  assetUuid: "123e4567-5f1c-4fa5-8b58-230fe37d912b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-a6a1-4594-bcf5-230fe759e42b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-083b-4d6d-be57-230fe5dedb7b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6dcf-465e-b21d-230fe95a108b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e1f8-44f5-8e6b-230fe48e5f5b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f321-48b3-a9b6-230fe516ed8b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-12ce-4fd6-93c7-230fee727f6b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5f1c-4fa5-8b58-230fe37d912b                                           |
# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-582c-4065-a7a4-22e07aebf8fb",
  formUuid: "123e4567-0ca0-4af0-bc78-22e075f0a49b",
  staffUuid: "123e4567-074f-4a2e-9f1f-22e0757d5dab",
  regardingObjectUuid: "123e4567-f623-4f3f-b47b-22e07053920b",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-3aed-4173-961e-22e0773bec2b",
  documentAttachmentUuid: "123e4567-21a2-4f36-a9bf-22e0764f7e3b",
  assetUuid: "123e4567-0a7b-4e3f-a1f1-22e070231c7b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-582c-4065-a7a4-22e07aebf8fb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0ca0-4af0-bc78-22e075f0a49b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-074f-4a2e-9f1f-22e0757d5dab                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f623-4f3f-b47b-22e07053920b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3aed-4173-961e-22e0773bec2b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-21a2-4f36-a9bf-22e0764f7e3b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0a7b-4e3f-a1f1-22e070231c7b                                           |
# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-983a-44f5-82aa-22e732d78aab",
  formUuid: "123e4567-4295-49e9-92e4-22e734780bcb",
  staffUuid: "123e4567-32ad-492c-8d2d-22e73a972feb",
  regardingObjectUuid: "123e4567-4f8f-4a46-8432-22e73ef3d74b",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-1ee0-4942-961e-22e739ba7b2b",
  documentAttachmentUuid: "123e4567-673e-4bfc-ae96-22e734b11a5b",
  assetUuid: "123e4567-a97c-4d65-bb16-22e73693b75b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-983a-44f5-82aa-22e732d78aab                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4295-49e9-92e4-22e734780bcb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-32ad-492c-8d2d-22e73a972feb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4f8f-4a46-8432-22e73ef3d74b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1ee0-4942-961e-22e739ba7b2b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-673e-4bfc-ae96-22e734b11a5b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-a97c-4d65-bb16-22e73693b75b                                           |
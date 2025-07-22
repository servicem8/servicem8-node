# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-3514-4f9d-971f-2308e69c405b",
  formUuid: "123e4567-bada-4c6e-b055-2308ee35365b",
  staffUuid: "123e4567-1fb5-4578-b912-2308e8a4491b",
  regardingObjectUuid: "123e4567-22e8-4ec1-bcf8-2308eb1804db",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-4763-420e-a38b-2308e05a6f1b",
  documentAttachmentUuid: "123e4567-5a20-4a77-9dcc-2308e2e616fb",
  assetUuid: "123e4567-d7b7-40b8-bf8b-2308e1e2bceb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-3514-4f9d-971f-2308e69c405b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-bada-4c6e-b055-2308ee35365b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1fb5-4578-b912-2308e8a4491b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-22e8-4ec1-bcf8-2308eb1804db                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4763-420e-a38b-2308e05a6f1b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5a20-4a77-9dcc-2308e2e616fb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d7b7-40b8-bf8b-2308e1e2bceb                                           |
# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-1f8e-47ad-a86e-22f45b72ae7b",
  formUuid: "123e4567-9640-4d12-85bd-22f4544b2d1b",
  staffUuid: "123e4567-5023-4040-b736-22f457b88ebb",
  regardingObjectUuid: "123e4567-38be-49da-bfe8-22f45169c93b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-1125-4bbd-8f66-22f4510208bb",
  documentAttachmentUuid: "123e4567-b8d7-4ee8-b16a-22f457dfd43b",
  assetUuid: "123e4567-6f5c-40a3-b2b0-22f450fc6bfb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-1f8e-47ad-a86e-22f45b72ae7b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9640-4d12-85bd-22f4544b2d1b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5023-4040-b736-22f457b88ebb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-38be-49da-bfe8-22f45169c93b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1125-4bbd-8f66-22f4510208bb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-b8d7-4ee8-b16a-22f457dfd43b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6f5c-40a3-b2b0-22f450fc6bfb                                           |
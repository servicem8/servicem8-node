# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-0f21-4bc0-9d37-22f380a6170b",
  formUuid: "123e4567-2b30-4494-b68e-22f38e6d35db",
  staffUuid: "123e4567-e2b6-47e9-87b2-22f38ae1e8db",
  regardingObjectUuid: "123e4567-321c-487d-919e-22f387ca397b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-6197-42ce-99d0-22f381ed190b",
  documentAttachmentUuid: "123e4567-2d1b-49d7-9d3b-22f38ed2f6eb",
  assetUuid: "123e4567-d49d-4816-afe1-22f38529f3fb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-0f21-4bc0-9d37-22f380a6170b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2b30-4494-b68e-22f38e6d35db                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e2b6-47e9-87b2-22f38ae1e8db                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-321c-487d-919e-22f387ca397b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6197-42ce-99d0-22f381ed190b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2d1b-49d7-9d3b-22f38ed2f6eb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d49d-4816-afe1-22f38529f3fb                                           |
# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-650a-42ad-b0d2-22e6efc237bb",
  editDate: "2025-06-01 12:00:00",
  formUuid: "123e4567-e512-4f63-912d-22e6e0d8ae8b",
  staffUuid: "123e4567-9da8-4623-8590-22e6ef1ec81b",
  regardingObjectUuid: "123e4567-7493-41fa-8437-22e6e858c9fb",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-7382-4be8-bf37-22e6e5b0c32b",
  documentAttachmentUuid: "123e4567-f6e8-486e-879e-22e6e56b4f3b",
  assetUuid: "123e4567-78c9-4d37-9998-22e6ee82521b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-650a-42ad-b0d2-22e6efc237bb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-06-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e512-4f63-912d-22e6e0d8ae8b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9da8-4623-8590-22e6ef1ec81b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7493-41fa-8437-22e6e858c9fb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7382-4be8-bf37-22e6e5b0c32b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f6e8-486e-879e-22e6e56b4f3b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-78c9-4d37-9998-22e6ee82521b                                           |
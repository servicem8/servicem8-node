# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-178a-4fa4-a1bb-2329bd3bc29b",
  formUuid: "123e4567-0db8-4602-b04f-2329b9b2d90b",
  staffUuid: "123e4567-721a-4295-82dc-2329bfa38f9b",
  regardingObjectUuid: "123e4567-d4a5-4382-94f8-2329bdb8d27b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-c7eb-4b86-9853-2329bcc0713b",
  documentAttachmentUuid: "123e4567-7e82-42cb-861a-2329b4d22dbb",
  assetUuid: "123e4567-c58c-40cf-8836-2329be5e6fab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-178a-4fa4-a1bb-2329bd3bc29b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0db8-4602-b04f-2329b9b2d90b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-721a-4295-82dc-2329bfa38f9b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d4a5-4382-94f8-2329bdb8d27b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | JSON array of form answers captured at submission time.                        |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c7eb-4b86-9853-2329bcc0713b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7e82-42cb-861a-2329b4d22dbb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c58c-40cf-8836-2329be5e6fab                                           |
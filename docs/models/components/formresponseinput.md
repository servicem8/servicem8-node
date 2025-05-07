# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-c264-401f-b671-22bcb7431cab",
  formUuid: "123e4567-3907-43f0-b6f7-22bcb898f0bb",
  staffUuid: "123e4567-720d-4082-9600-22bcb7cd451b",
  regardingObjectUuid: "123e4567-8627-4fab-87ca-22bcb1b18e3b",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-137c-40f6-9caf-22bcbe8c1ebb",
  documentAttachmentUuid: "123e4567-c739-4649-97d0-22bcb0da7eeb",
  assetUuid: "123e4567-be86-40bd-a11d-22bcb99a1a3b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-c264-401f-b671-22bcb7431cab                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3907-43f0-b6f7-22bcb898f0bb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-720d-4082-9600-22bcb7cd451b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8627-4fab-87ca-22bcb1b18e3b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-137c-40f6-9caf-22bcbe8c1ebb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c739-4649-97d0-22bcb0da7eeb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-be86-40bd-a11d-22bcb99a1a3b                                           |
# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-14df-4ee2-ac15-23110e4bcb2b",
  formUuid: "123e4567-9bef-450f-8eb9-23110ff7d23b",
  staffUuid: "123e4567-51f2-4bda-8feb-23110fa2cc0b",
  regardingObjectUuid: "123e4567-5b4d-48dd-9886-231107db4fbb",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-860d-4e06-9af4-231104375a2b",
  documentAttachmentUuid: "123e4567-8553-4ec9-896d-23110de81ecb",
  assetUuid: "123e4567-9c1b-438f-b692-23110632e31b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-14df-4ee2-ac15-23110e4bcb2b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9bef-450f-8eb9-23110ff7d23b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-51f2-4bda-8feb-23110fa2cc0b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5b4d-48dd-9886-231107db4fbb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-860d-4e06-9af4-231104375a2b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8553-4ec9-896d-23110de81ecb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9c1b-438f-b692-23110632e31b                                           |
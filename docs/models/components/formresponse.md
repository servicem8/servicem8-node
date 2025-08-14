# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-18cd-4ac0-9a45-231fe9f9ab1b",
  editDate: "2025-08-01 12:00:00",
  formUuid: "123e4567-e984-44b7-bab7-231fe768de9b",
  staffUuid: "123e4567-2365-4d26-adef-231fe0553aab",
  regardingObjectUuid: "123e4567-64c5-4808-bcfc-231fe0b583db",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-ce88-40c3-9a43-231fe5e100ab",
  documentAttachmentUuid: "123e4567-4076-4e55-9665-231feec6803b",
  assetUuid: "123e4567-989d-443b-a45c-231fed1b70db",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-18cd-4ac0-9a45-231fe9f9ab1b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-08-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e984-44b7-bab7-231fe768de9b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2365-4d26-adef-231fe0553aab                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-64c5-4808-bcfc-231fe0b583db                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ce88-40c3-9a43-231fe5e100ab                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4076-4e55-9665-231feec6803b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-989d-443b-a45c-231fed1b70db                                           |
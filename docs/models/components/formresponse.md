# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-5a42-4939-a886-22fc054319ab",
  editDate: "2025-07-01 12:00:00",
  formUuid: "123e4567-e58b-4ba4-952e-22fc06f48efb",
  staffUuid: "123e4567-dbf8-4827-a658-22fc081adecb",
  regardingObjectUuid: "123e4567-0073-41bb-ba9b-22fc03854afb",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-1231-4b22-87b5-22fc01a02eeb",
  documentAttachmentUuid: "123e4567-413c-4558-bea0-22fc03d2a67b",
  assetUuid: "123e4567-2a2a-424d-95c0-22fc0b5468fb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-5a42-4939-a886-22fc054319ab                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-07-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e58b-4ba4-952e-22fc06f48efb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-dbf8-4827-a658-22fc081adecb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0073-41bb-ba9b-22fc03854afb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1231-4b22-87b5-22fc01a02eeb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-413c-4558-bea0-22fc03d2a67b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2a2a-424d-95c0-22fc0b5468fb                                           |
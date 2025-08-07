# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-6348-4546-bf5e-23184785ee3b",
  formUuid: "123e4567-57e6-4384-a5f2-231840059b6b",
  staffUuid: "123e4567-e622-4792-ab07-23184817725b",
  regardingObjectUuid: "123e4567-6801-4fb9-bae4-23184864a33b",
  timestamp: "2025-08-01 12:00:00",
  formByStaffUuid: "123e4567-010d-4889-8771-2318486913ab",
  documentAttachmentUuid: "123e4567-774f-4764-b0aa-23184b873abb",
  assetUuid: "123e4567-68c1-48b8-9103-231849b302eb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-6348-4546-bf5e-23184785ee3b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-57e6-4384-a5f2-231840059b6b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-e622-4792-ab07-23184817725b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6801-4fb9-bae4-23184864a33b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-08-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-010d-4889-8771-2318486913ab                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-774f-4764-b0aa-23184b873abb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-68c1-48b8-9103-231849b302eb                                           |
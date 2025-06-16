# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-dbd5-44d1-961f-22e4764bdb3b",
  editDate: "2025-06-01 12:00:00",
  formUuid: "123e4567-27e8-4097-885c-22e47e68018b",
  staffUuid: "123e4567-993b-45cc-b759-22e47f60d0cb",
  regardingObjectUuid: "123e4567-2201-4ebb-b609-22e479913bfb",
  timestamp: "2025-06-01 12:00:00",
  formByStaffUuid: "123e4567-4b13-4b3c-95b3-22e47f19900b",
  documentAttachmentUuid: "123e4567-1dcc-4b7f-b0ca-22e472821d2b",
  assetUuid: "123e4567-a703-4da9-aa6a-22e473875a9b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-dbd5-44d1-961f-22e4764bdb3b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `editDate`                                                                     | *any*                                                                          | :heavy_minus_sign:                                                             | Timestamp at which record was last modified                                    | 2025-06-01 12:00:00                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-27e8-4097-885c-22e47e68018b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-993b-45cc-b759-22e47f60d0cb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2201-4ebb-b609-22e479913bfb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-06-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-4b13-4b3c-95b3-22e47f19900b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1dcc-4b7f-b0ca-22e472821d2b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-a703-4da9-aa6a-22e473875a9b                                           |
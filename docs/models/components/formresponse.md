# FormResponse

## Example Usage

```typescript
import { FormResponse } from "servicem8/models/components";

let value: FormResponse = {
  uuid: "123e4567-1e83-4060-a755-22b569492d9b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  formUuid: "123e4567-b75d-4d05-9fda-22b56adf755b",
  staffUuid: "123e4567-b8ff-4587-bd1d-22b5622d8d3b",
  regardingObjectUuid: "123e4567-f4c5-4ea0-a16e-22b560b6193b",
  timestamp: "YYYY-MM-DD HH:MM:SS",
  formByStaffUuid: "123e4567-2bb8-473d-8a44-22b56b019fbb",
  documentAttachmentUuid: "123e4567-fec8-4db4-aa85-22b56f2ed78b",
  assetUuid: "123e4567-8177-4df5-8963-22b56e11bcab",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-1e83-4060-a755-22b569492d9b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `editDate`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Record last modified timestamp                                                 | YYYY-MM-DD HH:MM:SS                                                            |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-b75d-4d05-9fda-22b56adf755b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-b8ff-4587-bd1d-22b5622d8d3b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f4c5-4ea0-a16e-22b560b6193b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2bb8-473d-8a44-22b56b019fbb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-fec8-4db4-aa85-22b56f2ed78b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-8177-4df5-8963-22b56e11bcab                                           |
# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-024e-4250-9822-22b56afc00cb",
  formUuid: "123e4567-1e14-4c13-a435-22b569e7dc2b",
  staffUuid: "123e4567-2580-470c-8d9a-22b564eee6bb",
  regardingObjectUuid: "123e4567-b41c-402a-a045-22b5682fb03b",
  timestamp: "YYYY-MM-DD HH:MM:SS",
  formByStaffUuid: "123e4567-bf53-4e81-9e8c-22b56eba351b",
  documentAttachmentUuid: "123e4567-3cca-4411-98f4-22b56eb105db",
  assetUuid: "123e4567-cdee-4fda-a386-22b56a1c6dcb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-024e-4250-9822-22b56afc00cb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-1e14-4c13-a435-22b569e7dc2b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-2580-470c-8d9a-22b564eee6bb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-b41c-402a-a045-22b5682fb03b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-bf53-4e81-9e8c-22b56eba351b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3cca-4411-98f4-22b56eb105db                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-cdee-4fda-a386-22b56a1c6dcb                                           |
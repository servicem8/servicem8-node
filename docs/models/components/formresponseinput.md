# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-cdbd-4bee-bbca-22b4d938e7cb",
  formUuid: "123e4567-574e-455e-aa17-22b4dbcc051b",
  staffUuid: "123e4567-f1a2-4083-ac86-22b4d3d9ad2b",
  regardingObjectUuid: "123e4567-7900-4739-ad0d-22b4dbf72a8b",
  timestamp: "YYYY-MM-DD HH:MM:SS",
  formByStaffUuid: "123e4567-542e-4845-9ad5-22b4d0bf00eb",
  documentAttachmentUuid: "123e4567-65fd-48dd-bb7a-22b4d0c032fb",
  assetUuid: "123e4567-be51-4f9b-914f-22b4d35c4c0b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-cdbd-4bee-bbca-22b4d938e7cb                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-574e-455e-aa17-22b4dbcc051b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f1a2-4083-ac86-22b4d3d9ad2b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-7900-4739-ad0d-22b4dbf72a8b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-542e-4845-9ad5-22b4d0bf00eb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-65fd-48dd-bb7a-22b4d0c032fb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-be51-4f9b-914f-22b4d35c4c0b                                           |
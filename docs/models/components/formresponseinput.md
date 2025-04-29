# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-263e-465a-92c0-22b4d555791b",
  formUuid: "123e4567-f212-4cf1-9f88-22b4dbfe0f2b",
  staffUuid: "123e4567-40bf-49f9-9729-22b4d87ff09b",
  regardingObjectUuid: "123e4567-5de7-4527-8e83-22b4d118cb4b",
  timestamp: "YYYY-MM-DD HH:MM:SS",
  formByStaffUuid: "123e4567-63c9-457a-8390-22b4d45d88bb",
  documentAttachmentUuid: "123e4567-77cf-4ae8-b0c3-22b4d634345b",
  assetUuid: "123e4567-690e-4ff2-97d1-22b4d7c1090b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-263e-465a-92c0-22b4d555791b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f212-4cf1-9f88-22b4dbfe0f2b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-40bf-49f9-9729-22b4d87ff09b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5de7-4527-8e83-22b4d118cb4b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-63c9-457a-8390-22b4d45d88bb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-77cf-4ae8-b0c3-22b4d634345b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-690e-4ff2-97d1-22b4d7c1090b                                           |
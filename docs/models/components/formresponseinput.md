# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-d29b-4121-80f4-22b6c7f4a67b",
  formUuid: "123e4567-ee37-48bb-91a4-22b6c7e4bddb",
  staffUuid: "123e4567-da14-4829-a92a-22b6c3a9357b",
  regardingObjectUuid: "123e4567-c7ac-405b-b94e-22b6c928a6bb",
  timestamp: "2025-05-01 12:00:00",
  formByStaffUuid: "123e4567-edcc-42d9-99cb-22b6c6ab11bb",
  documentAttachmentUuid: "123e4567-c6ce-4685-8706-22b6cdecddbb",
  assetUuid: "123e4567-acf3-4b45-bf1a-22b6c30638bb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-d29b-4121-80f4-22b6c7f4a67b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ee37-48bb-91a4-22b6c7e4bddb                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-da14-4829-a92a-22b6c3a9357b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c7ac-405b-b94e-22b6c928a6bb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-05-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-edcc-42d9-99cb-22b6c6ab11bb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c6ce-4685-8706-22b6cdecddbb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-acf3-4b45-bf1a-22b6c30638bb                                           |
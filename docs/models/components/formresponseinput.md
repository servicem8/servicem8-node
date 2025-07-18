# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-649d-4d7c-9e0d-2302f430d40b",
  formUuid: "123e4567-9127-4e2b-8e94-2302fd62c26b",
  staffUuid: "123e4567-c463-4590-9082-2302fefb23bb",
  regardingObjectUuid: "123e4567-a1be-4da1-a01c-2302fd546cfb",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-5587-4416-938c-2302f8aeffeb",
  documentAttachmentUuid: "123e4567-54c3-490d-a2e4-2302f70dc2fb",
  assetUuid: "123e4567-3097-4422-917e-2302fa4853bb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-649d-4d7c-9e0d-2302f430d40b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9127-4e2b-8e94-2302fd62c26b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-c463-4590-9082-2302fefb23bb                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-a1be-4da1-a01c-2302fd546cfb                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-5587-4416-938c-2302f8aeffeb                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-54c3-490d-a2e4-2302f70dc2fb                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-3097-4422-917e-2302fa4853bb                                           |
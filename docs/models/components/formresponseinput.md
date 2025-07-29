# FormResponseInput

## Example Usage

```typescript
import { FormResponseInput } from "servicem8/models/components";

let value: FormResponseInput = {
  uuid: "123e4567-ad60-4df1-abc5-230fec51fd4b",
  formUuid: "123e4567-d3f0-443d-b161-230fe16cea4b",
  staffUuid: "123e4567-bc9d-4784-a6fc-230fe3e6565b",
  regardingObjectUuid: "123e4567-0b7b-4e78-a942-230fe8e5b11b",
  timestamp: "2025-07-01 12:00:00",
  formByStaffUuid: "123e4567-77df-4d49-8e6e-230fedf9c94b",
  documentAttachmentUuid: "123e4567-04cd-4fa2-abe7-230fe307a05b",
  assetUuid: "123e4567-d00b-4e17-924b-230feb357cfb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Unique identifier for this record                                              | 123e4567-ad60-4df1-abc5-230fec51fd4b                                           |
| `active`                                                                       | [components.FormResponseActive](../../models/components/formresponseactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag.  Valid values are [0,1]                            |                                                                                |
| `formUuid`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d3f0-443d-b161-230fe16cea4b                                           |
| `staffUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-bc9d-4784-a6fc-230fe3e6565b                                           |
| `regardingObject`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingObjectUuid`                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-0b7b-4e78-a942-230fe8e5b11b                                           |
| `fieldData`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `timestamp`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 2025-07-01 12:00:00                                                            |
| `formByStaffUuid`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-77df-4d49-8e6e-230fedf9c94b                                           |
| `documentAttachmentUuid`                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-04cd-4fa2-abe7-230fe307a05b                                           |
| `assetUuid`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-d00b-4e17-924b-230feb357cfb                                           |
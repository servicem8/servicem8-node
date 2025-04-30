# StaffMessage

## Example Usage

```typescript
import { StaffMessage } from "servicem8/models/components";

let value: StaffMessage = {
  uuid: "123e4567-030b-4cad-8a4a-22b56db79f6b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  fromStaffUuid: "123e4567-6962-4572-bb0e-22b56ea015fb",
  toStaffUuid: "123e4567-ebd4-4d0d-8251-22b5627dd31b",
  sentTimestamp: "YYYY-MM-DD HH:MM:SS",
  deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
  readTimestamp: "YYYY-MM-DD HH:MM:SS",
  regardingJobUuid: "123e4567-bdf7-4160-9c7f-22b5625bab3b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-030b-4cad-8a4a-22b56db79f6b                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `editDate`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Record last modified timestamp                                                 | YYYY-MM-DD HH:MM:SS                                                            |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-6962-4572-bb0e-22b56ea015fb                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-ebd4-4d0d-8251-22b5627dd31b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-bdf7-4160-9c7f-22b5625bab3b                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
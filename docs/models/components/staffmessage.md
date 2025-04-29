# StaffMessage

## Example Usage

```typescript
import { StaffMessage } from "servicem8/models/components";

let value: StaffMessage = {
  uuid: "123e4567-c22a-430a-9448-22b4d045c56b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  fromStaffUuid: "123e4567-022a-480e-a659-22b4db3c7ddb",
  toStaffUuid: "123e4567-9c5d-4d25-94ae-22b4d25e969b",
  sentTimestamp: "YYYY-MM-DD HH:MM:SS",
  deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
  readTimestamp: "YYYY-MM-DD HH:MM:SS",
  regardingJobUuid: "123e4567-aefd-48d4-a075-22b4dcd3cfdb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-c22a-430a-9448-22b4d045c56b                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `editDate`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Record last modified timestamp                                                 | YYYY-MM-DD HH:MM:SS                                                            |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-022a-480e-a659-22b4db3c7ddb                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9c5d-4d25-94ae-22b4d25e969b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-aefd-48d4-a075-22b4dcd3cfdb                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
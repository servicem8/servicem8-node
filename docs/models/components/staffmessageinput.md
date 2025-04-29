# StaffMessageInput

## Example Usage

```typescript
import { StaffMessageInput } from "servicem8/models/components";

let value: StaffMessageInput = {
  uuid: "123e4567-37bd-4f2f-92a8-22b4d8a598fb",
  fromStaffUuid: "123e4567-f86c-4727-8836-22b4d5f09afb",
  toStaffUuid: "123e4567-9db9-4b7c-ae63-22b4d530359b",
  sentTimestamp: "YYYY-MM-DD HH:MM:SS",
  deliveredTimestamp: "YYYY-MM-DD HH:MM:SS",
  readTimestamp: "YYYY-MM-DD HH:MM:SS",
  regardingJobUuid: "123e4567-727f-4ff4-ba63-22b4d14b3beb",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-37bd-4f2f-92a8-22b4d8a598fb                                           |
| `active`                                                                       | [components.StaffMessageActive](../../models/components/staffmessageactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `fromStaffUuid`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-f86c-4727-8836-22b4d5f09afb                                           |
| `toStaffUuid`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-9db9-4b7c-ae63-22b4d530359b                                           |
| `sentTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `deliveredTimestamp`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `readTimestamp`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | YYYY-MM-DD HH:MM:SS                                                            |
| `message`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `regardingJobUuid`                                                             | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 123e4567-727f-4ff4-ba63-22b4d14b3beb                                           |
| `attachedJson`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
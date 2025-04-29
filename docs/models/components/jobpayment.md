# JobPayment

## Example Usage

```typescript
import { JobPayment } from "servicem8/models/components";

let value: JobPayment = {
  uuid: "123e4567-8724-4a46-9520-22b4dfc7e64b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  jobUuid: "123e4567-a4e7-45f7-8b0f-22b4d4e7b0ab",
  actionedByUuid: "123e4567-8605-4ae2-bc8c-22b4d4fa4d6b",
  attachmentUuid: "123e4567-f8ae-4a8a-b030-22b4d8b011eb",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Record UUID key                                                            | 123e4567-8724-4a46-9520-22b4dfc7e64b                                       |
| `active`                                                                   | [components.JobPaymentActive](../../models/components/jobpaymentactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag. <br/><br/>Valid values are [0,1]               |                                                                            |
| `editDate`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Record last modified timestamp                                             | YYYY-MM-DD HH:MM:SS                                                        |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-a4e7-45f7-8b0f-22b4d4e7b0ab                                       |
| `actionedByUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-8605-4ae2-bc8c-22b4d4fa4d6b                                       |
| `timestamp`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `method`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `attachmentUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-f8ae-4a8a-b030-22b4d8b011eb                                       |
| `isDeposit`                                                                | [components.IsDeposit](../../models/components/isdeposit.md)               | :heavy_minus_sign:                                                         | (Read-only). <br/><br/>Valid values are [0,1]                              |                                                                            |
# JobPayment

## Example Usage

```typescript
import { JobPayment } from "servicem8/models/components";

let value: JobPayment = {
  uuid: "123e4567-e5d3-404c-be5c-22b56831006b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  jobUuid: "123e4567-1324-46e9-99a9-22b56f3a338b",
  actionedByUuid: "123e4567-2e30-46e2-afb2-22b561f1e33b",
  attachmentUuid: "123e4567-9337-44de-bd74-22b56af2517b",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Record UUID key                                                            | 123e4567-e5d3-404c-be5c-22b56831006b                                       |
| `active`                                                                   | [components.JobPaymentActive](../../models/components/jobpaymentactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag. <br/><br/>Valid values are [0,1]               |                                                                            |
| `editDate`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Record last modified timestamp                                             | YYYY-MM-DD HH:MM:SS                                                        |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-1324-46e9-99a9-22b56f3a338b                                       |
| `actionedByUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-2e30-46e2-afb2-22b561f1e33b                                       |
| `timestamp`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `method`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `attachmentUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-9337-44de-bd74-22b56af2517b                                       |
| `isDeposit`                                                                | [components.IsDeposit](../../models/components/isdeposit.md)               | :heavy_minus_sign:                                                         | (Read-only). <br/><br/>Valid values are [0,1]                              |                                                                            |
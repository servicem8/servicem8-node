# JobPayment

## Example Usage

```typescript
import { JobPayment } from "servicem8/models/components";

let value: JobPayment = {
  uuid: "123e4567-cc29-46eb-96e6-22b4dc2249ab",
  editDate: "YYYY-MM-DD HH:MM:SS",
  jobUuid: "123e4567-2bf8-457d-95fb-22b4dbdc312b",
  actionedByUuid: "123e4567-e044-4c9c-9bd6-22b4de384b4b",
  attachmentUuid: "123e4567-8d54-452a-bbe6-22b4ddde434b",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Record UUID key                                                            | 123e4567-cc29-46eb-96e6-22b4dc2249ab                                       |
| `active`                                                                   | [components.JobPaymentActive](../../models/components/jobpaymentactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag. <br/><br/>Valid values are [0,1]               |                                                                            |
| `editDate`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Record last modified timestamp                                             | YYYY-MM-DD HH:MM:SS                                                        |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-2bf8-457d-95fb-22b4dbdc312b                                       |
| `actionedByUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-e044-4c9c-9bd6-22b4de384b4b                                       |
| `timestamp`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `method`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `attachmentUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-8d54-452a-bbe6-22b4ddde434b                                       |
| `isDeposit`                                                                | [components.IsDeposit](../../models/components/isdeposit.md)               | :heavy_minus_sign:                                                         | (Read-only). <br/><br/>Valid values are [0,1]                              |                                                                            |
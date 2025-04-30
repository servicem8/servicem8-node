# JobPaymentInput

## Example Usage

```typescript
import { JobPaymentInput } from "servicem8/models/components";

let value: JobPaymentInput = {
  uuid: "123e4567-6be2-4325-ae6b-22b5692a112b",
  jobUuid: "123e4567-88c7-4507-835f-22b56b53eeab",
  actionedByUuid: "123e4567-e4c5-45fa-b043-22b561dff4ab",
  attachmentUuid: "123e4567-dbc1-436b-95b3-22b56b9ff1cb",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Record UUID key                                                            | 123e4567-6be2-4325-ae6b-22b5692a112b                                       |
| `active`                                                                   | [components.JobPaymentActive](../../models/components/jobpaymentactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag. <br/><br/>Valid values are [0,1]               |                                                                            |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-88c7-4507-835f-22b56b53eeab                                       |
| `actionedByUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-e4c5-45fa-b043-22b561dff4ab                                       |
| `timestamp`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `amount`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `method`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `note`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `attachmentUuid`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-dbc1-436b-95b3-22b56b9ff1cb                                       |
| `isDeposit`                                                                | [components.IsDeposit](../../models/components/isdeposit.md)               | :heavy_minus_sign:                                                         | (Read-only). <br/><br/>Valid values are [0,1]                              |                                                                            |
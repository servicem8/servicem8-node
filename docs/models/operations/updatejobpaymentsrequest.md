# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPaymentCreate: {
    jobUuid: "123e4567-cc31-42bb-86fc-23482da2878b",
    actionedByUuid: "123e4567-3296-4764-90b4-23482b9efbdb",
    timestamp: "2025-09-01 12:00:00",
    attachmentUuid: "123e4567-22de-456a-aa7b-23482b760cbb",
    uuid: "123e4567-cb3d-427b-90f1-23482c40962b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Payment                                                    |
| `jobPaymentCreate`                                                         | [components.JobPaymentCreate](../../models/components/jobpaymentcreate.md) | :heavy_check_mark:                                                         | Job Payment fields to update                                               |
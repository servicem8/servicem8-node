# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPaymentCreate: {
    jobUuid: "123e4567-eb85-496b-90d4-23d5910e077b",
    actionedByUuid: "123e4567-ba4a-42ae-b930-23d5906d215b",
    timestamp: "2026-02-01 12:00:00",
    attachmentUuid: "123e4567-9be2-4194-8838-23d59f8d0dfb",
    uuid: "123e4567-8ba0-4a0d-a19d-23d59a3b425b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Payment                                                    |
| `jobPaymentCreate`                                                         | [components.JobPaymentCreate](../../models/components/jobpaymentcreate.md) | :heavy_check_mark:                                                         | Job Payment fields to update                                               |
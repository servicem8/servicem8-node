# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPaymentCreate: {
    jobUuid: "123e4567-0e7b-46bd-8edb-23e938868d3b",
    actionedByUuid: "123e4567-bc65-4bf9-9600-23e937482e0b",
    timestamp: "2026-03-01 12:00:00",
    attachmentUuid: "123e4567-c350-42c7-b56b-23e93fbd6ebb",
    uuid: "123e4567-4afa-4a58-88db-23e931b4810b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Payment                                                    |
| `jobPaymentCreate`                                                         | [components.JobPaymentCreate](../../models/components/jobpaymentcreate.md) | :heavy_check_mark:                                                         | Job Payment fields to update                                               |
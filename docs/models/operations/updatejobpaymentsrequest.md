# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPaymentCreate: {
    jobUuid: "123e4567-506b-4a39-9032-23b2ef36dbeb",
    actionedByUuid: "123e4567-6c7c-4679-b03c-23b2e1dfa42b",
    timestamp: "2026-01-01 12:00:00",
    attachmentUuid: "123e4567-531f-40bb-8198-23b2ec83242b",
    uuid: "123e4567-6356-48eb-b6cb-23b2e55a27cb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Payment                                                    |
| `jobPaymentCreate`                                                         | [components.JobPaymentCreate](../../models/components/jobpaymentcreate.md) | :heavy_check_mark:                                                         | Job Payment fields to update                                               |
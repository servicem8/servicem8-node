# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPaymentCreate: {
    jobUuid: "123e4567-fdfe-44a8-9def-23497dc3992b",
    actionedByUuid: "123e4567-5987-4906-b5b0-2349730d2d4b",
    timestamp: "2025-09-01 12:00:00",
    attachmentUuid: "123e4567-7e74-4721-b098-23497572da5b",
    uuid: "123e4567-898d-4b92-b1c2-2349728cb32b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Payment                                                    |
| `jobPaymentCreate`                                                         | [components.JobPaymentCreate](../../models/components/jobpaymentcreate.md) | :heavy_check_mark:                                                         | Job Payment fields to update                                               |
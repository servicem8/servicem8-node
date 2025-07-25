# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPayment: {
    uuid: "123e4567-c39e-4623-b7ab-230b7de19c1b",
    jobUuid: "123e4567-b16c-4867-9a70-230b736fc07b",
    actionedByUuid: "123e4567-8e63-4c13-8a26-230b704d719b",
    attachmentUuid: "123e4567-7dce-4f04-ae7f-230b76eb6a6b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Payment                                                  |
| `jobPayment`                                                             | [components.JobPaymentInput](../../models/components/jobpaymentinput.md) | :heavy_check_mark:                                                       | Job Payment fields to update                                             |
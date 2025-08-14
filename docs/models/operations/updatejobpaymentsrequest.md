# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPayment: {
    uuid: "123e4567-d07e-4360-92cc-231ef68ec49b",
    jobUuid: "123e4567-d0c9-46ee-bc05-231ef7c901fb",
    actionedByUuid: "123e4567-fd5b-4db4-bae2-231ef02598eb",
    timestamp: "2025-08-01 12:00:00",
    attachmentUuid: "123e4567-eec4-4da4-9c02-231efaf00f4b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Payment                                                  |
| `jobPayment`                                                             | [components.JobPaymentInput](../../models/components/jobpaymentinput.md) | :heavy_check_mark:                                                       | Job Payment fields to update                                             |
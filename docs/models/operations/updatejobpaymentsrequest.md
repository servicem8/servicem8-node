# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPayment: {
    uuid: "123e4567-486f-427f-8096-230feb5f0a0b",
    jobUuid: "123e4567-50b1-4df6-b28b-230fe924238b",
    actionedByUuid: "123e4567-5254-45e5-90b2-230feb7fcc5b",
    attachmentUuid: "123e4567-ab9e-4b10-8410-230fee8582db",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Payment                                                  |
| `jobPayment`                                                             | [components.JobPaymentInput](../../models/components/jobpaymentinput.md) | :heavy_check_mark:                                                       | Job Payment fields to update                                             |
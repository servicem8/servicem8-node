# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPayment: {
    uuid: "123e4567-5261-48d3-858e-23110c2a0a0b",
    jobUuid: "123e4567-b195-4555-a785-23110657be2b",
    actionedByUuid: "123e4567-1b82-4571-b1fc-231101468e1b",
    attachmentUuid: "123e4567-5bb9-4255-8e4c-23110ccb5fbb",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Payment                                                  |
| `jobPayment`                                                             | [components.JobPaymentInput](../../models/components/jobpaymentinput.md) | :heavy_check_mark:                                                       | Job Payment fields to update                                             |
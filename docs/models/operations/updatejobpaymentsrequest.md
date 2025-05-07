# UpdateJobPaymentsRequest

## Example Usage

```typescript
import { UpdateJobPaymentsRequest } from "servicem8/models/operations";

let value: UpdateJobPaymentsRequest = {
  uuid: "c98a4d70-9131-4595-bcdd-b5a6b68bee7c",
  jobPayment: {
    uuid: "123e4567-078f-4aff-9899-22bb0830af7b",
    jobUuid: "123e4567-df71-4822-a7a2-22bb02f83c4b",
    actionedByUuid: "123e4567-aa0a-4b98-b641-22bb0eebd14b",
    attachmentUuid: "123e4567-b32c-43df-b4c9-22bb091ecf3b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Payment                                                  |
| `jobPayment`                                                             | [components.JobPaymentInput](../../models/components/jobpaymentinput.md) | :heavy_check_mark:                                                       | Job Payment fields to update                                             |
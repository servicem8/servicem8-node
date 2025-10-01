# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-3ba5-4872-9854-234d584a78bb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-c26d-4729-85e2-234d5c834b2b",
    status: "Quote",
    paymentDate: "2025-09-01 12:00:00",
    paymentActionedByUuid: "123e4567-b127-417a-bbd0-234d594db8bb",
    categoryUuid: "123e4567-59da-4849-b73b-234d5a80d72b",
    queueUuid: "123e4567-344d-44e9-ad5c-234d56582d9b",
    queueExpiryDate: "2025-09-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-3df0-4988-a9f9-234d590d635b",
    quoteDate: "2025-09-01 12:00:00",
    workOrderDate: "2025-09-01 12:00:00",
    uuid: "123e4567-ea57-4245-a8a0-234d52bc61ab",
    completionDate: "2025-09-01 12:00:00",
    unsuccessfulDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Job                                              |
| `jobCreate`                                                  | [components.JobCreate](../../models/components/jobcreate.md) | :heavy_check_mark:                                           | Job fields to update                                         |
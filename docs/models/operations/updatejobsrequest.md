# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-30fa-4dd7-91a0-23482a4d50cb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-6039-4c75-bdf1-23482e2af79b",
    status: "Quote",
    paymentDate: "2025-09-01 12:00:00",
    paymentActionedByUuid: "123e4567-502d-4e1a-99a0-23482d75d8fb",
    categoryUuid: "123e4567-4c1b-4213-b974-23482578448b",
    queueUuid: "123e4567-f0fd-481a-8a04-23482f4536ab",
    queueExpiryDate: "2025-09-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-96d9-42b9-8091-23482b48a36b",
    quoteDate: "2025-09-01 12:00:00",
    workOrderDate: "2025-09-01 12:00:00",
    uuid: "123e4567-ef47-4121-b882-23482f27071b",
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
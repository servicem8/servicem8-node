# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-a55b-4b43-8707-233c62b17f3b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-d936-4a40-be5d-233c66490b6b",
    status: "Quote",
    paymentDate: "2025-09-01 12:00:00",
    paymentActionedByUuid: "123e4567-60d5-4e82-88fc-233c6a5b51eb",
    categoryUuid: "123e4567-cace-4c47-89ea-233c6c4d107b",
    queueUuid: "123e4567-63c0-4238-b14c-233c675383bb",
    queueExpiryDate: "2025-09-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-d907-4232-8208-233c69bbae4b",
    quoteDate: "2025-09-01 12:00:00",
    workOrderDate: "2025-09-01 12:00:00",
    uuid: "123e4567-0b8c-4a4d-b53b-233c62820dfb",
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
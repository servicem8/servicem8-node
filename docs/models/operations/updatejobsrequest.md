# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-2f6d-47bc-9c1f-23b2eb5cb50b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-2181-4e53-99ed-23b2e8ca051b",
    status: "Quote",
    paymentDate: "2026-01-01 12:00:00",
    paymentActionedByUuid: "123e4567-1ba2-4eaa-b3f6-23b2e00342eb",
    categoryUuid: "123e4567-0b06-4941-9a80-23b2e95ae10b",
    queueUuid: "123e4567-6797-4331-9adf-23b2ef59991b",
    queueExpiryDate: "2026-01-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-e3b0-44d4-8dd3-23b2e439993b",
    quoteDate: "2026-01-01 12:00:00",
    workOrderDate: "2026-01-01 12:00:00",
    uuid: "123e4567-28d6-43c5-81b8-23b2e254a20b",
    completionDate: "2026-01-01 12:00:00",
    unsuccessfulDate: "2026-01-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Job                                              |
| `jobCreate`                                                  | [components.JobCreate](../../models/components/jobcreate.md) | :heavy_check_mark:                                           | Job fields to update                                         |
# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-2870-4d15-84d9-23d59df38e4b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-ecfa-432a-a71a-23d5976112fb",
    status: "Quote",
    paymentDate: "2026-02-01 12:00:00",
    paymentActionedByUuid: "123e4567-2928-4e8a-8e5b-23d59ff8b09b",
    categoryUuid: "123e4567-21c1-4478-be15-23d59837546b",
    queueUuid: "123e4567-012a-4ab7-ba83-23d59c995c5b",
    queueExpiryDate: "2026-02-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-8c57-4e58-bbc0-23d59bb3204b",
    quoteDate: "2026-02-01 12:00:00",
    workOrderDate: "2026-02-01 12:00:00",
    uuid: "123e4567-3bc1-45c9-82c9-23d590b5812b",
    completionDate: "2026-02-01 12:00:00",
    unsuccessfulDate: "2026-02-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Job                                              |
| `jobCreate`                                                  | [components.JobCreate](../../models/components/jobcreate.md) | :heavy_check_mark:                                           | Job fields to update                                         |
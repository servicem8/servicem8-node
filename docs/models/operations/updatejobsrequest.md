# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-0193-4c57-9d7e-234972ff0eeb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-edcc-4134-9101-23497a4aa3eb",
    status: "Quote",
    paymentDate: "2025-09-01 12:00:00",
    paymentActionedByUuid: "123e4567-0e2d-411d-b11f-234972f0b55b",
    categoryUuid: "123e4567-f8b8-46aa-b16a-23497017afbb",
    queueUuid: "123e4567-4fee-4f34-a1a7-234972dfb4cb",
    queueExpiryDate: "2025-09-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-5dbd-4bdf-b94f-234977e199bb",
    quoteDate: "2025-09-01 12:00:00",
    workOrderDate: "2025-09-01 12:00:00",
    uuid: "123e4567-6f18-4405-a36a-2349711c110b",
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
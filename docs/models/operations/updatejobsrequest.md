# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-0721-414a-918f-23eb208a816b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-7f97-4b7d-ab5d-23eb2841740b",
    status: "Quote",
    paymentDate: "2026-03-01 12:00:00",
    paymentActionedByUuid: "123e4567-9dd7-4ec1-868b-23eb28678c6b",
    categoryUuid: "123e4567-3b97-48c6-9818-23eb2c8ff05b",
    queueUuid: "123e4567-cef5-40fd-ba12-23eb21f96ebb",
    queueExpiryDate: "2026-03-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-b3d1-4e5c-94af-23eb27c857bb",
    quoteDate: "2026-03-01 12:00:00",
    workOrderDate: "2026-03-01 12:00:00",
    uuid: "123e4567-95aa-4a5a-8a53-23eb2fb583ab",
    completionDate: "2026-03-01 12:00:00",
    unsuccessfulDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Job                                              |
| `jobCreate`                                                  | [components.JobCreate](../../models/components/jobcreate.md) | :heavy_check_mark:                                           | Job fields to update                                         |
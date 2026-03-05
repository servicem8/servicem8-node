# UpdateJobsRequest

## Example Usage

```typescript
import { UpdateJobsRequest } from "servicem8/models/operations";

let value: UpdateJobsRequest = {
  uuid: "5bf03a7f-1419-48a8-8a46-c6be410974dc",
  jobCreate: {
    createdByStaffUuid: "123e4567-15bd-41cf-a56a-23e93691619b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-ac28-4a8e-8303-23e9342d3e6b",
    status: "Quote",
    paymentDate: "2026-03-01 12:00:00",
    paymentActionedByUuid: "123e4567-cc4a-465c-b985-23e93c56764b",
    categoryUuid: "123e4567-ca35-40c7-b75f-23e93e511e6b",
    queueUuid: "123e4567-49d8-4d64-b676-23e933371f8b",
    queueExpiryDate: "2026-03-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-2eef-459b-9bb9-23e93b7b887b",
    quoteDate: "2026-03-01 12:00:00",
    workOrderDate: "2026-03-01 12:00:00",
    uuid: "123e4567-232c-4384-8949-23e93a3e235b",
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
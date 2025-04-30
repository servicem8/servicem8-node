# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-4bdf-41d1-a0d7-22b569f7881b",
    jobUuid: "123e4567-123e-4971-a3d8-22b569e312eb",
    queueUuid: "123e4567-879f-4c2f-b4c0-22b56951411b",
    staffUuid: "123e4567-20d4-4fa4-8c8f-22b5605f046b",
    allocationDate: "YYYY-MM-DD HH:MM:SS",
    allocationWindowUuid: "123e4567-10fd-4f26-ad13-22b560545fbb",
    allocatedByStaffUuid: "123e4567-3978-4779-8926-22b56422b0bb",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    expiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    completionTimestamp: "YYYY-MM-DD HH:MM:SS",
    acceptanceTimestamp: "YYYY-MM-DD HH:MM:SS",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |
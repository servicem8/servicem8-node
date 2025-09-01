# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-fa33-4fdf-8474-233124eec24b",
    jobUuid: "123e4567-c81a-4f00-a076-23312cebe30b",
    queueUuid: "123e4567-5c4e-417b-be83-23312767137b",
    staffUuid: "123e4567-676f-4dd6-a2d3-233123d386fb",
    allocationDate: "2025-09-01 12:00:00",
    allocationWindowUuid: "123e4567-0f00-47be-926b-2331220d673b",
    allocatedByStaffUuid: "123e4567-c5f8-4504-8c52-23312dacfffb",
    allocatedTimestamp: "2025-09-01 12:00:00",
    expiryTimestamp: "2025-09-01 12:00:00",
    readTimestamp: "2025-09-01 12:00:00",
    completionTimestamp: "2025-09-01 12:00:00",
    acceptanceTimestamp: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Job Allocation                                                     |
| `jobAllocation`                                                                | [components.JobAllocationInput](../../models/components/joballocationinput.md) | :heavy_check_mark:                                                             | Job Allocation fields to update                                                |
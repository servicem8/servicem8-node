# UpdateJobAllocationsRequest

## Example Usage

```typescript
import { UpdateJobAllocationsRequest } from "servicem8/models/operations";

let value: UpdateJobAllocationsRequest = {
  uuid: "3eaf1248-31d8-4775-a805-14e8c85b6e96",
  jobAllocation: {
    uuid: "123e4567-4707-446d-af0f-22b4d806f2db",
    jobUuid: "123e4567-e3d7-401c-8328-22b4df3ab01b",
    queueUuid: "123e4567-efcb-4a05-a5f9-22b4d8a5914b",
    staffUuid: "123e4567-da6f-4ef8-be09-22b4dceaffcb",
    allocationDate: "YYYY-MM-DD HH:MM:SS",
    allocationWindowUuid: "123e4567-cb79-4a70-8a27-22b4d1be8fcb",
    allocatedByStaffUuid: "123e4567-63d3-40e5-84cc-22b4d6b58eab",
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
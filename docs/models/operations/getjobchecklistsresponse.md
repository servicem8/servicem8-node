# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-a3d4-41b1-b7fc-22fc0f2e5f6b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-02c9-4f65-8e7f-22fc0075e59b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-d51f-4f02-b379-22fc0d67109b",
  completedDuringCheckinUuid: "123e4567-91d1-4f69-9063-22fc011ae8bb",
  regardingObjectUuid: "123e4567-8f95-41d1-9aa3-22fc0384ad8b",
  fulfilledByObjectUuid: "123e4567-71bf-4784-8a4d-22fc0d5abb5b",
  assignedToStaffUuids: [
    "123e4567-1f29-46f5-b744-22fc0aa052ab",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-33b9-45dd-96b1-22fc0eae2cdb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


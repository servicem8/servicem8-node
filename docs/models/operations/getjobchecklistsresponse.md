# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-dfec-42ed-9620-22f45def75ab",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-34b6-4b9b-8819-22f45956967b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-3382-4fb4-8048-22f45d1a7c0b",
  completedDuringCheckinUuid: "123e4567-2674-49d3-a6bf-22f45f294a9b",
  regardingObjectUuid: "123e4567-ac60-4eb6-bde1-22f459a40dcb",
  fulfilledByObjectUuid: "123e4567-a147-4998-8e0e-22f45ebdc03b",
  assignedToStaffUuids: [
    "123e4567-a532-4163-881f-22f4554b612b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-db82-425e-b0b5-22f45b7a65db",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


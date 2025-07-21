# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-0ecb-4897-841a-2306f101f27b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-90bf-401a-965f-2306f9bbd4bb",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-06d8-4a8b-8d1d-2306f6e77beb",
  completedDuringCheckinUuid: "123e4567-1008-40b3-b7a5-2306f175bc8b",
  regardingObjectUuid: "123e4567-071a-421b-be6c-2306fc76f30b",
  fulfilledByObjectUuid: "123e4567-2c5b-4bd0-b82d-2306ff816b6b",
  assignedToStaffUuids: [
    "123e4567-9def-4150-b463-2306fc2bb95b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-e1d1-4ed5-afd9-2306f8e7512b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


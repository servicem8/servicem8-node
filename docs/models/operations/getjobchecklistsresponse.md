# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-5aae-41d4-98a0-230042e8465b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-9b47-4991-ab50-23004ee319ab",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-46fc-49b1-8787-23004e86d66b",
  completedDuringCheckinUuid: "123e4567-663c-40d0-811c-23004a05082b",
  regardingObjectUuid: "123e4567-cc03-4b14-96f2-23004ffc855b",
  fulfilledByObjectUuid: "123e4567-3ee4-4e75-9b26-2300410ae4eb",
  assignedToStaffUuids: [
    "123e4567-43c2-4298-8229-23004885d03b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-5ab5-4108-9a48-23004db3afeb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


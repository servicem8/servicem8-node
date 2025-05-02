# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-ab2c-493e-bba3-22b6c9d7483b",
  editDate: "2025-05-01 12:00:00",
  jobUuid: "123e4567-af8c-44fc-ac23-22b6cf79712b",
  completedTimestamp: "2025-05-01 12:00:00",
  completedByStaffUuid: "123e4567-08c9-4aff-86d6-22b6c63d899b",
  completedDuringCheckinUuid: "123e4567-1f3a-4660-a12c-22b6c69c968b",
  regardingObjectUuid: "123e4567-fdc0-4de5-a494-22b6c4e9312b",
  fulfilledByObjectUuid: "123e4567-9f11-4fea-b14b-22b6c5ee42db",
  assignedToStaffUuids: [
    "123e4567-2057-46ec-a6f1-22b6c620d82b",
  ],
  assignedTimestamp: "2025-05-01 12:00:00",
  assignedByStaffUuid: "123e4567-dbe9-49ff-b243-22b6cdf8c0bb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


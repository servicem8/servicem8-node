# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-3c58-432b-8f9d-22ec725cb38b",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-65dc-4e7c-a164-22ec7ac1f81b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-8f81-4b08-9f1c-22ec73ef976b",
  completedDuringCheckinUuid: "123e4567-4288-4bcf-989a-22ec79dd5c4b",
  regardingObjectUuid: "123e4567-39de-435a-a1e2-22ec7e4a404b",
  fulfilledByObjectUuid: "123e4567-b832-48d1-a1de-22ec76f110db",
  assignedToStaffUuids: [
    "123e4567-bb24-4e12-884b-22ec76220d6b",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-8d59-431a-bfbd-22ec7b5990bb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


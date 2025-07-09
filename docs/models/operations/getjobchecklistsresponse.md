# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-ef81-4675-95d4-22fb2581d2cb",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-a413-45c9-ac65-22fb2e80ab5b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-dea3-47e7-8fd3-22fb2b89078b",
  completedDuringCheckinUuid: "123e4567-1309-48bf-bd84-22fb288ad04b",
  regardingObjectUuid: "123e4567-65ef-4568-a05a-22fb27c5ae6b",
  fulfilledByObjectUuid: "123e4567-b316-427a-b002-22fb2d437cab",
  assignedToStaffUuids: [
    "123e4567-20f6-4a48-aecb-22fb2f13c90b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-7146-403b-849d-22fb236a9e8b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


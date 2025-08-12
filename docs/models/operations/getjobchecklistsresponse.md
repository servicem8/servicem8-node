# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-0883-4145-ace7-231cffb0fe0b",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-683f-43fc-9ebd-231cf7fb171b",
  completedTimestamp: "2025-08-01 12:00:00",
  completedByStaffUuid: "123e4567-df54-4b39-a207-231cf8f5d71b",
  completedDuringCheckinUuid: "123e4567-c326-43d6-baf3-231cf642a94b",
  regardingObjectUuid: "123e4567-3cbe-4ec5-b864-231cf98fe5cb",
  fulfilledByObjectUuid: "123e4567-4bbf-4c57-b418-231cfdc1760b",
  assignedToStaffUuids: [
    "123e4567-9026-41cb-8cdd-231cf3f2c6db",
  ],
  assignedTimestamp: "2025-08-01 12:00:00",
  assignedByStaffUuid: "123e4567-8b65-4631-a035-231cf9d9d98b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


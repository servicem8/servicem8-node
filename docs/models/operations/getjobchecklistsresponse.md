# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-5913-405f-912a-23126177a96b",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-df30-4d33-812a-231262505ccb",
  completedTimestamp: "2025-08-01 12:00:00",
  completedByStaffUuid: "123e4567-7981-49d1-a1de-23126879a06b",
  completedDuringCheckinUuid: "123e4567-9cd0-4d04-ab85-23126a8a56fb",
  regardingObjectUuid: "123e4567-8a7d-489b-b454-23126655c71b",
  fulfilledByObjectUuid: "123e4567-ea2d-4fdd-b82f-231262fddc7b",
  assignedToStaffUuids: [
    "123e4567-7161-4061-bd31-2312622eb9eb",
  ],
  assignedTimestamp: "2025-08-01 12:00:00",
  assignedByStaffUuid: "123e4567-2e4d-435c-b98a-23126244300b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


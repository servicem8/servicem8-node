# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-bec8-4261-b597-231efb255b4b",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-44e7-496a-93b1-231ef84b440b",
  completedTimestamp: "2025-08-01 12:00:00",
  completedByStaffUuid: "123e4567-f5fe-4e14-805b-231efd20d2bb",
  completedDuringCheckinUuid: "123e4567-bb3e-4614-952a-231ef3eb3d6b",
  regardingObjectUuid: "123e4567-5cf3-448c-b3b2-231efe58411b",
  fulfilledByObjectUuid: "123e4567-21e1-47ce-949d-231ef9963e9b",
  assignedToStaffUuids: [
    "123e4567-ca13-45ce-8f40-231ef11342cb",
  ],
  assignedTimestamp: "2025-08-01 12:00:00",
  assignedByStaffUuid: "123e4567-b35c-4e27-a319-231efe60d4fb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


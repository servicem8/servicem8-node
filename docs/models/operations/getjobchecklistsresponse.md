# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-e83e-413d-a570-2311076b661b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-d792-49f7-9d1b-2311011883ab",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-5688-4641-a114-231106d73cab",
  completedDuringCheckinUuid: "123e4567-ba62-462d-bf4c-23110b44272b",
  regardingObjectUuid: "123e4567-03e2-4bd1-833e-23110d817e3b",
  fulfilledByObjectUuid: "123e4567-5b18-402a-9a26-231102ed475b",
  assignedToStaffUuids: [
    "123e4567-35c3-4491-b2d5-23110a72866b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-37f0-4644-a53f-23110611488b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


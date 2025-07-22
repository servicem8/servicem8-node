# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-c0a8-4f10-8f50-2308e0ce11bb",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-56a0-4183-8f40-2308e2a34b7b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-dcc7-45f5-b31d-2308e89b086b",
  completedDuringCheckinUuid: "123e4567-4c67-4185-8f62-2308eef40c1b",
  regardingObjectUuid: "123e4567-dc6c-4515-94eb-2308e685878b",
  fulfilledByObjectUuid: "123e4567-ea2f-4d1d-a589-2308e256ef0b",
  assignedToStaffUuids: [
    "123e4567-ea88-47da-83b3-2308e1cd843b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-9f6d-45c9-995e-2308e47f8b3b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


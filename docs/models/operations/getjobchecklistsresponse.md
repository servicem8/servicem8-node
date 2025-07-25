# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-e2fd-4787-a23d-230b795604db",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-7343-4a75-ad5d-230b754d822b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-7c95-4d2c-871d-230b7d3baf8b",
  completedDuringCheckinUuid: "123e4567-ae5a-490c-8377-230b7638542b",
  regardingObjectUuid: "123e4567-9f4c-45c3-8045-230b758a3efb",
  fulfilledByObjectUuid: "123e4567-e3ca-46f1-9f74-230b74c3d3eb",
  assignedToStaffUuids: [
    "123e4567-620b-4a7d-b82c-230b73a71c5b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-60e8-4a19-a13e-230b714b267b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


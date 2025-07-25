# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-20ce-42f9-b2c6-230b7bc59bfb",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-dddd-4a57-93f1-230b7aef2aab",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-fcca-4f20-8d34-230b7ca9ef8b",
  completedDuringCheckinUuid: "123e4567-7af1-4b42-bdf3-230b78d10d4b",
  regardingObjectUuid: "123e4567-80e5-41c7-bafb-230b79ca509b",
  fulfilledByObjectUuid: "123e4567-3674-4d8f-935d-230b7e557d2b",
  assignedToStaffUuids: [
    "123e4567-1780-4a2e-b420-230b755cc5bb",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-7cf3-4fda-9ef4-230b72cdea6b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


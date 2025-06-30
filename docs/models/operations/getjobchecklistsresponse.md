# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-9297-41f3-a158-22ef2d8885bb",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-ef86-4537-983b-22ef2f9be30b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-b626-412a-8a2b-22ef2f6c984b",
  completedDuringCheckinUuid: "123e4567-11bc-4352-aac7-22ef21e9847b",
  regardingObjectUuid: "123e4567-0b30-4225-bbf6-22ef2061312b",
  fulfilledByObjectUuid: "123e4567-66a0-4325-8f4f-22ef2564927b",
  assignedToStaffUuids: [
    "123e4567-d971-4187-ad26-22ef29705a3b",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-6f64-44b3-a622-22ef220e4a9b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


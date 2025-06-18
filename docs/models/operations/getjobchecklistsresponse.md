# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-2af7-421a-ae76-22e6e82a0c4b",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-12f2-4824-9683-22e6e2da505b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-3153-4907-9b8d-22e6e0bdec0b",
  completedDuringCheckinUuid: "123e4567-646e-4228-9e1e-22e6ed12119b",
  regardingObjectUuid: "123e4567-e2cd-4d0f-b535-22e6ee1fba1b",
  fulfilledByObjectUuid: "123e4567-3fbb-42ee-88ee-22e6efae4fab",
  assignedToStaffUuids: [
    "123e4567-10dc-46ed-9d34-22e6efa6b31b",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-5c79-4e8b-ad77-22e6eb527d9b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


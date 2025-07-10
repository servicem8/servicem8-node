# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-d0d8-4fd8-9421-22fc0488345b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-df71-464f-879b-22fc09c5850b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-a4ef-42c1-8213-22fc0e296dcb",
  completedDuringCheckinUuid: "123e4567-c06d-41c6-8d9f-22fc02eb50ab",
  regardingObjectUuid: "123e4567-a588-4ed8-b61d-22fc012c86ab",
  fulfilledByObjectUuid: "123e4567-80cb-4df2-b03b-22fc08030ecb",
  assignedToStaffUuids: [
    "123e4567-9da1-4991-a07a-22fc030e675b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-69a4-4834-b113-22fc056d5d8b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


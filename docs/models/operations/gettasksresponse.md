# GetTasksResponse


## Supported Types

### `components.Task`

```typescript
const value: components.Task = {
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-4339-427e-a1d4-230b7f318b8b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-74f2-461e-a469-230b77091dbb",
  assignedToStaffUuid: "123e4567-17a9-4e6f-a9c8-230b79b1afbb",
  uuid: "123e4567-8f8e-406c-9b3f-230b73cd093b",
  editDate: "2025-07-01 12:00:00",
  createdByStaffUuid: "123e4567-1a33-4f04-9cd8-230b72f5e71b",
  createDate: "2025-07-01 12:00:00",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


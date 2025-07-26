# GetTasksResponse


## Supported Types

### `components.Task`

```typescript
const value: components.Task = {
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-6cad-43ba-8e04-230c45f2d27b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-6876-4e73-b5f0-230c4cc7405b",
  assignedToStaffUuid: "123e4567-c7a1-4834-8a33-230c4487b74b",
  uuid: "123e4567-1bd1-41e9-b2a4-230c4edb311b",
  editDate: "2025-07-01 12:00:00",
  createdByStaffUuid: "123e4567-14ab-474c-b8b4-230c40814ebb",
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


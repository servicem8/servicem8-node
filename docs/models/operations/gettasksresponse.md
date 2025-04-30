# GetTasksResponse


## Supported Types

### `components.Task`

```typescript
const value: components.Task = {
  uuid: "123e4567-ece3-44ac-92f9-22b566d83f9b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-d851-4442-b179-22b56fd2b45b",
  completedTimestamp: "YYYY-MM-DD HH:MM:SS",
  completedByStaffUuid: "123e4567-ac80-4057-adb7-22b56ade3aab",
  assignedToStaffUuid: "123e4567-a976-4d7d-a1c4-22b5673c4d3b",
  createdByStaffUuid: "123e4567-9a07-4eb5-9255-22b56447679b",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


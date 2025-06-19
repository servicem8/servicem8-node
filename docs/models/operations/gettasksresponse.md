# GetTasksResponse


## Supported Types

### `components.Task`

```typescript
const value: components.Task = {
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-7134-4a3d-a2ba-22e73bd4a28b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-92fc-4356-8156-22e7314fa75b",
  assignedToStaffUuid: "123e4567-c59d-4d11-ac0e-22e73bad209b",
  uuid: "123e4567-c6e8-465b-9f6a-22e730514c8b",
  editDate: "2025-06-01 12:00:00",
  createdByStaffUuid: "123e4567-f863-423b-b3b7-22e73f6acefb",
  createDate: "2025-06-01 12:00:00",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


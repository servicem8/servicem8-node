# GetTasksResponse


## Supported Types

### `components.Task`

```typescript
const value: components.Task = {
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-9c28-4605-b24b-22fc029870eb",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-1067-451f-9cfd-22fc028f3b4b",
  assignedToStaffUuid: "123e4567-326f-4226-a4d2-22fc04079e3b",
  uuid: "123e4567-3f82-4af5-9612-22fc01694f6b",
  editDate: "2025-07-01 12:00:00",
  createdByStaffUuid: "123e4567-9e6d-477e-b2e5-22fc0bd51b0b",
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


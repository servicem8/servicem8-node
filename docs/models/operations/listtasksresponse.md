# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-73df-4f57-a276-22e073fe3c5b",
    completedTimestamp: "2025-06-01 12:00:00",
    completedByStaffUuid: "123e4567-3b5d-4818-8283-22e07457dfcb",
    assignedToStaffUuid: "123e4567-3fac-4bbe-a9d9-22e07737e0eb",
    uuid: "123e4567-2cb2-4cba-9efa-22e07debc32b",
    editDate: "2025-06-01 12:00:00",
    createdByStaffUuid: "123e4567-2c3f-4cc4-83ed-22e07912da4b",
    createDate: "2025-06-01 12:00:00",
  },
];
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


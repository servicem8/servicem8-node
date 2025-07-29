# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-e699-48bf-b010-230fe081a49b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-2c9b-4ee4-8690-230fe129c02b",
    assignedToStaffUuid: "123e4567-9759-4edf-be35-230fe9d3657b",
    uuid: "123e4567-4ff3-4cf8-9c1b-230fe572e3db",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-3517-490b-8845-230fe238b27b",
    createDate: "2025-07-01 12:00:00",
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


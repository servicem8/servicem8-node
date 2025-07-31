# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ade5-4ae8-a904-23110d1e11db",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-c297-4211-803f-231101dd3f2b",
    assignedToStaffUuid: "123e4567-65a0-4403-8b21-23110bd3cfab",
    uuid: "123e4567-2052-4787-89c5-2311040f1a8b",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-f7c1-4778-9503-23110b26c70b",
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


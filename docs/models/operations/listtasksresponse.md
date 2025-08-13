# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-6dce-409a-aa3a-231d2a7b375b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-4b6b-47ec-8d7e-231d2b26271b",
    assignedToStaffUuid: "123e4567-062d-4647-a8b5-231d22b42eeb",
    uuid: "123e4567-8aab-4141-a638-231d2209298b",
    editDate: "2025-08-01 12:00:00",
    createdByStaffUuid: "123e4567-56b7-4fb5-9eb9-231d29d22aeb",
    createDate: "2025-08-01 12:00:00",
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


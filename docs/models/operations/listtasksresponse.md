# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-f62b-467f-992f-230efb238e4b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-4fb4-43da-8bb4-230efb266a2b",
    assignedToStaffUuid: "123e4567-506d-4f11-8069-230efa689e7b",
    uuid: "123e4567-db75-4d5c-8d71-230ef75a709b",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-1ce7-4bcc-8cd4-230ef66a55eb",
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


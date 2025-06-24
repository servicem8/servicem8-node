# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-7717-4616-8fa4-22ec7d08cebb",
    completedTimestamp: "2025-06-01 12:00:00",
    completedByStaffUuid: "123e4567-9be8-437e-b2bc-22ec7f2f7b3b",
    assignedToStaffUuid: "123e4567-7761-4da2-89ee-22ec787aaa9b",
    uuid: "123e4567-e96f-42bf-b7a6-22ec7733117b",
    editDate: "2025-06-01 12:00:00",
    createdByStaffUuid: "123e4567-f414-44ca-8c5e-22ec72763b4b",
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


# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-c43a-45a8-8b61-22b6c4f467cb",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-ea63-41cd-aba2-22b6c533f2ab",
    assignedToStaffUuid: "123e4567-85e3-42d7-97d2-22b6cbc8afeb",
    uuid: "123e4567-e99e-42f0-a7c3-22b6c447882b",
    editDate: "2025-05-01 12:00:00",
    createdByStaffUuid: "123e4567-499f-4926-820f-22b6ce4dd66b",
    createDate: "2025-05-01 12:00:00",
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


# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ce5b-4029-ac72-2313fb48337b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-7584-4e83-9698-2313f0ffa11b",
    assignedToStaffUuid: "123e4567-fe9b-4c23-a3dd-2313f3e3351b",
    uuid: "123e4567-d1b9-48fa-9e50-2313f07399ab",
    editDate: "2025-08-01 12:00:00",
    createdByStaffUuid: "123e4567-f4ef-4822-ba59-2313fdb3ec5b",
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


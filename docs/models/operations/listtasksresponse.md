# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-f386-4ae5-a0e8-22f45196f51b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-0432-44bd-9d71-22f457f205ab",
    assignedToStaffUuid: "123e4567-bb4a-4e7f-b9b5-22f45e645b2b",
    uuid: "123e4567-623f-46f4-8930-22f4553bffcb",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-8341-46f1-8e86-22f453efb91b",
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


# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    uuid: "123e4567-f57c-4f40-9407-22b56eb0a86b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-d679-4a40-81f3-22b56fb3a68b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-e42c-4cad-9b63-22b56fdb88eb",
    assignedToStaffUuid: "123e4567-aeb9-48fc-a041-22b56b39fe5b",
    createdByStaffUuid: "123e4567-e34e-4873-92a2-22b56ca0349b",
    createDate: "YYYY-MM-DD HH:MM:SS",
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


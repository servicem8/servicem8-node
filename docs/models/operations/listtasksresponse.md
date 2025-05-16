# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ce90-436a-86b4-22bdc62cc73b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-184c-4747-a67c-22bdc8aa44bb",
    assignedToStaffUuid: "123e4567-26d2-495d-83d7-22bdcfe4a42b",
    uuid: "123e4567-0791-40a6-a6af-22bdc0b6d54b",
    editDate: "2025-05-01 12:00:00",
    createdByStaffUuid: "123e4567-0052-461a-8f8b-22bdc42ba03b",
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


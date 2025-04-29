# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    uuid: "123e4567-23f2-4a4c-99b4-22b4d56f813b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-576f-4010-9711-22b4d7262f3b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-529f-457a-b588-22b4d1e045cb",
    assignedToStaffUuid: "123e4567-1d55-481f-9f97-22b4d83c193b",
    createdByStaffUuid: "123e4567-37bb-4d5d-8826-22b4d5b5c9bb",
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


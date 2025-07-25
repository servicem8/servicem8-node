# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-7fba-4431-a230-230a6eecac7b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-f7c3-4ece-b165-230a62994afb",
    assignedToStaffUuid: "123e4567-2425-4be3-ad99-230a6d4f67bb",
    uuid: "123e4567-9d3b-4065-90fa-230a68ade0cb",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-ef9b-471e-834e-230a6d509a5b",
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


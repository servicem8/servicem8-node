# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-3370-4357-9911-22e47fc4f4fb",
    completedTimestamp: "2025-06-01 12:00:00",
    completedByStaffUuid: "123e4567-81cb-4bff-9757-22e47430588b",
    assignedToStaffUuid: "123e4567-8a96-43e9-af5e-22e4701ea12b",
    uuid: "123e4567-e618-41a8-8bd5-22e47ef0297b",
    editDate: "2025-06-01 12:00:00",
    createdByStaffUuid: "123e4567-532b-414e-9c06-22e47ce2d64b",
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


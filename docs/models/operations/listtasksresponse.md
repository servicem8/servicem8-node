# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-edee-4deb-b680-22bcb739f39b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-342f-497e-8a00-22bcb465cd4b",
    assignedToStaffUuid: "123e4567-d71c-40a0-9cf1-22bcb3ecdffb",
    uuid: "123e4567-fdd3-45fa-972c-22bcb225f9bb",
    editDate: "2025-05-01 12:00:00",
    createdByStaffUuid: "123e4567-94e4-4353-821f-22bcba76509b",
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


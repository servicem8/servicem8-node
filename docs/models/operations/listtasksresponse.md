# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-2c9f-44a5-8470-22fd84c6d6eb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-a11a-40b5-aa7a-22fd82f14c1b",
    assignedToStaffUuid: "123e4567-5d96-4504-9341-22fd8df7b39b",
    uuid: "123e4567-00c3-4b07-9b6a-22fd888a902b",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-0a30-4625-ad38-22fd80ab7f0b",
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


# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-9e50-4426-b6ca-22ef2115fd0b",
    completedTimestamp: "2025-06-01 12:00:00",
    completedByStaffUuid: "123e4567-fc33-4511-8d00-22ef22ed3ffb",
    assignedToStaffUuid: "123e4567-52fc-410b-a6ae-22ef2770fe5b",
    uuid: "123e4567-2862-4e42-90f8-22ef25ff064b",
    editDate: "2025-06-01 12:00:00",
    createdByStaffUuid: "123e4567-a363-46a7-8918-22ef21eb385b",
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


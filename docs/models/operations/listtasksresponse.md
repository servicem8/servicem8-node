# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-e66a-4bfd-b0f9-22bcba92498b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-9e84-4e5a-b9c8-22bcb38f150b",
    assignedToStaffUuid: "123e4567-f1d0-4fec-8951-22bcbdafc19b",
    uuid: "123e4567-8098-4f64-99da-22bcbe28750b",
    editDate: "2025-05-01 12:00:00",
    createdByStaffUuid: "123e4567-8e04-4f13-9505-22bcbf2a95eb",
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


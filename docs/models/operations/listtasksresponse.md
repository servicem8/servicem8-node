# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ad1b-4c7d-8384-2306fe00f88b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-ae1e-4e83-9632-2306f0f84d2b",
    assignedToStaffUuid: "123e4567-e582-452f-ae18-2306f60a55ab",
    uuid: "123e4567-dec4-4567-9ee5-2306f8705beb",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-8d58-4b9f-87c3-2306f3e4825b",
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


# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-87ee-4cb8-89cb-23004227596b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-d88b-47da-b7e5-2300455f577b",
    assignedToStaffUuid: "123e4567-8500-4616-9c0f-23004b4962db",
    uuid: "123e4567-b88b-4dea-a60b-2300466f880b",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-9490-413c-bc93-2300421bb5fb",
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


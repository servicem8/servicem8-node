# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-62dc-46b7-b75c-23184e661ccb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-b396-4f0d-8518-231846db3d6b",
    assignedToStaffUuid: "123e4567-5405-46e9-a5e9-231845c227eb",
    uuid: "123e4567-b8d6-4a26-9f8f-23184bd0050b",
    editDate: "2025-08-01 12:00:00",
    createdByStaffUuid: "123e4567-7a46-422a-8413-23184417461b",
    createDate: "2025-08-01 12:00:00",
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


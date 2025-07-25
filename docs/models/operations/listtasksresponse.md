# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-5dc3-4031-bf46-230b7600494b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-85f4-4db5-a85b-230b75e7ea5b",
    assignedToStaffUuid: "123e4567-10a9-49b9-a332-230b725d9d4b",
    uuid: "123e4567-9f76-4bb1-8e69-230b7cc7a92b",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-8969-422e-b0b4-230b72e0a5bb",
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


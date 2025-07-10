# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-4caa-4d09-8576-22fc0cac40ab",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-2960-4d9b-94bb-22fc01b320eb",
    assignedToStaffUuid: "123e4567-c43d-4e57-9eac-22fc0ee7a1cb",
    uuid: "123e4567-b900-41a9-8a45-22fc00a4b26b",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-d97c-4a2d-82df-22fc07cb50fb",
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


# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-13f2-40b3-b5b4-22e478d8160b",
    completedTimestamp: "2025-06-01 12:00:00",
    completedByStaffUuid: "123e4567-9606-4187-a548-22e4735bf48b",
    assignedToStaffUuid: "123e4567-37aa-4cb9-b25c-22e471b0c22b",
    uuid: "123e4567-aae7-4563-b910-22e47406ecbb",
    editDate: "2025-06-01 12:00:00",
    createdByStaffUuid: "123e4567-36d6-4687-b622-22e47b47c58b",
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


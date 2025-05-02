# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-f1ac-4de0-87ab-22b706c8ad2b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-23f5-44f5-8d1a-22b7001dd96b",
    assignedToStaffUuid: "123e4567-afc2-4a1c-92de-22b7051a56eb",
    uuid: "123e4567-ff07-4fe1-bab9-22b70c8f692b",
    editDate: "2025-05-01 12:00:00",
    createdByStaffUuid: "123e4567-21e3-41be-b4ea-22b70b68ba0b",
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


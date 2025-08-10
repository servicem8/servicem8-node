# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-de75-4682-8ecc-231b29175f2b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-f8ba-44a8-9459-231b2012511b",
    assignedToStaffUuid: "123e4567-710c-40be-be2a-231b2766669b",
    uuid: "123e4567-0226-4535-b968-231b2e84d88b",
    editDate: "2025-08-01 12:00:00",
    createdByStaffUuid: "123e4567-3065-45c5-9992-231b2ce79b9b",
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


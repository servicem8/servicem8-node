# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-fcfe-464f-9732-231cfafa134b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-2eec-44b4-93eb-231cfe37a01b",
    assignedToStaffUuid: "123e4567-befd-4e51-b91f-231cf8792a5b",
    uuid: "123e4567-bb91-4ecf-8243-231cf104fa8b",
    editDate: "2025-08-01 12:00:00",
    createdByStaffUuid: "123e4567-31da-40ac-a9d9-231cf9e8240b",
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


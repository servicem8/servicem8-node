# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-02b1-4dbb-a6e7-2311083328cb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-c967-45e5-8cc9-231109c6fadb",
    assignedToStaffUuid: "123e4567-85cd-4267-82bc-231102fcdecb",
    uuid: "123e4567-9d0d-416d-b028-23110b05721b",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-af09-4294-9bf7-23110a32691b",
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


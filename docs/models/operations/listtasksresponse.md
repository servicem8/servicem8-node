# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-4961-4ecc-a821-23126dc2586b",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-2ca8-4239-935e-231260906deb",
    assignedToStaffUuid: "123e4567-b07c-4339-86a2-23126555021b",
    uuid: "123e4567-a70e-471d-86db-231261194efb",
    editDate: "2025-08-01 12:00:00",
    createdByStaffUuid: "123e4567-56ff-4268-a9d6-23126d58fc4b",
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


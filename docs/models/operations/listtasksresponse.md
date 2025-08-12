# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-eb7b-44e3-9cdd-231cf44467cb",
    completedTimestamp: "2025-08-01 12:00:00",
    completedByStaffUuid: "123e4567-2feb-409a-9047-231cfef135eb",
    assignedToStaffUuid: "123e4567-56e3-4a55-ae3c-231cf6e604cb",
    uuid: "123e4567-5e18-478e-8af2-231cf2a37abb",
    editDate: "2025-08-01 12:00:00",
    createdByStaffUuid: "123e4567-8c2e-480f-b4cd-231cf4d253eb",
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


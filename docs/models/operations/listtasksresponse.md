# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-5d38-480e-8f53-22fb218e7dbb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-403c-4e97-b630-22fb236a1b1b",
    assignedToStaffUuid: "123e4567-db74-44dc-bd76-22fb2f1b474b",
    uuid: "123e4567-f459-4835-bc4f-22fb21a508fb",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-adfc-44ed-a175-22fb28d3ffeb",
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


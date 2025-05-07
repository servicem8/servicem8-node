# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-19ee-4acf-9f74-22bb065eaebb",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-3eb7-4f4f-a4e1-22bb051cb1ab",
    assignedToStaffUuid: "123e4567-77fb-45ed-9358-22bb0d2abb0b",
    uuid: "123e4567-dae8-4290-899d-22bb0e0f898b",
    editDate: "2025-05-01 12:00:00",
    createdByStaffUuid: "123e4567-e475-4efb-a2e7-22bb070ed2bb",
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


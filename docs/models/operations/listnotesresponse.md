# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-13d6-47f2-a15d-22b6cf8c96eb",
    editDate: "2025-05-01 12:00:00",
    relatedObjectUuid: "123e4567-f911-48cd-a4ed-22b6c7c46acb",
    actionCompletedByStaffUuid: "123e4567-19d0-4213-ba39-22b6cd50eceb",
    editByStaffUuid: "123e4567-3121-4f51-8a52-22b6cb90bebb",
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


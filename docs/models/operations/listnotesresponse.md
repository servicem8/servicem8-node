# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-bbb0-4e76-bfc1-22bcb901344b",
    editDate: "2025-05-01 12:00:00",
    relatedObjectUuid: "123e4567-9aba-44c1-bd78-22bcb0397c9b",
    actionCompletedByStaffUuid: "123e4567-80f3-4b67-bbd9-22bcbc06a84b",
    editByStaffUuid: "123e4567-52f4-4049-a1af-22bcbf40f88b",
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


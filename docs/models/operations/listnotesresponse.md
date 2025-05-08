# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-550a-4ede-ae2d-22bcb151a6db",
    editDate: "2025-05-01 12:00:00",
    relatedObjectUuid: "123e4567-0e39-4155-8568-22bcb7e5b6bb",
    actionCompletedByStaffUuid: "123e4567-9b95-49c8-ade7-22bcbe02dedb",
    editByStaffUuid: "123e4567-ae6b-4016-aa8a-22bcb972d8fb",
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


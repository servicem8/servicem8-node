# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-6a92-422d-89bc-22bb0357c20b",
    editDate: "2025-05-01 12:00:00",
    relatedObjectUuid: "123e4567-05ca-4a1a-95b2-22bb05eddb8b",
    actionCompletedByStaffUuid: "123e4567-e8c7-4dbf-aaf7-22bb0a28facb",
    editByStaffUuid: "123e4567-b7f7-478b-95d4-22bb0d6ac92b",
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


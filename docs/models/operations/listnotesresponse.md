# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-8ef7-4349-a650-22bcb44005fb",
    editDate: "2025-05-01 12:00:00",
    relatedObjectUuid: "123e4567-5626-4c35-9909-22bcb21108fb",
    actionCompletedByStaffUuid: "123e4567-1b2f-42f8-a69d-22bcb62a4fab",
    editByStaffUuid: "123e4567-0587-4704-85a2-22bcbd234d8b",
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


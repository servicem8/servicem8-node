# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-8139-48dd-84e8-22b4d0e390cb",
    editDate: "YYYY-MM-DD HH:MM:SS",
    relatedObjectUuid: "123e4567-0ee6-4314-a56b-22b4d7c77efb",
    actionCompletedByStaffUuid: "123e4567-72a3-4634-b1c4-22b4d9083b4b",
    editByStaffUuid: "123e4567-27cb-4cca-8897-22b4d4bcf5db",
    createDate: "YYYY-MM-DD HH:MM:SS",
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


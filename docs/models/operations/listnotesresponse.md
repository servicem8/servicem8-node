# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-8906-4e88-b7b5-22b56416009b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    relatedObjectUuid: "123e4567-2597-4098-8bcb-22b56eb4826b",
    actionCompletedByStaffUuid: "123e4567-5ace-4d75-b290-22b5693e564b",
    editByStaffUuid: "123e4567-675f-404f-b4e3-22b567ed69db",
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


# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-1aff-4dcf-a60e-22b56d6ddb3b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    relatedObjectUuid: "123e4567-7ac1-40f7-a428-22b562158b4b",
    actionCompletedByStaffUuid: "123e4567-a084-49fb-b71b-22b5691b3c7b",
    editByStaffUuid: "123e4567-aa6d-4977-90a1-22b56225970b",
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


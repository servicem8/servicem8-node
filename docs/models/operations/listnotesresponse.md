# ListNotesResponse


## Supported Types

### `components.Note[]`

```typescript
const value: components.Note[] = [
  {
    uuid: "123e4567-31be-42d9-bea4-22bdcbf718bb",
    editDate: "2025-05-01 12:00:00",
    relatedObjectUuid: "123e4567-a1e8-424f-90d2-22bdc53bf00b",
    actionCompletedByStaffUuid: "123e4567-cc2a-463e-b344-22bdc6ac702b",
    editByStaffUuid: "123e4567-042f-4a02-a300-22bdc793f96b",
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


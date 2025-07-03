# ListTasksResponse


## Supported Types

### `components.Task[]`

```typescript
const value: components.Task[] = [
  {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ca10-471e-bb98-22f45041947b",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-b1de-4d34-bfcc-22f454b4e38b",
    assignedToStaffUuid: "123e4567-5456-4cb9-8db0-22f4552fb4cb",
    uuid: "123e4567-e270-403a-810e-22f4549127db",
    editDate: "2025-07-01 12:00:00",
    createdByStaffUuid: "123e4567-6dc7-49d9-a1e7-22f453391aab",
    createDate: "2025-07-01 12:00:00",
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


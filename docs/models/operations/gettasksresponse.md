# GetTasksResponse


## Supported Types

### `components.Task`

```typescript
const value: components.Task = {
  uuid: "123e4567-dc43-4493-9ca7-22b4d0090a8b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-d2a6-4591-a6dd-22b4d017cefb",
  completedTimestamp: "YYYY-MM-DD HH:MM:SS",
  completedByStaffUuid: "123e4567-fb87-4daf-8cb3-22b4dc2a492b",
  assignedToStaffUuid: "123e4567-698c-4d37-8aca-22b4dea21ccb",
  createdByStaffUuid: "123e4567-9b5f-4964-ad21-22b4dd2c51db",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


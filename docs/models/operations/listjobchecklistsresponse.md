# ListJobChecklistsResponse


## Supported Types

### `components.JobChecklist[]`

```typescript
const value: components.JobChecklist[] = [
  {
    uuid: "123e4567-6da8-4514-8eaf-22bb0d20c3fb",
    editDate: "2025-05-01 12:00:00",
    jobUuid: "123e4567-fccc-47fc-ada7-22bb0c20e03b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-baa9-4d8c-86d0-22bb09447bbb",
    completedDuringCheckinUuid: "123e4567-28a0-4e03-b920-22bb0cce728b",
    regardingObjectUuid: "123e4567-31fb-4e49-88ca-22bb09ebf69b",
    fulfilledByObjectUuid: "123e4567-377a-4c7c-8ecf-22bb07b54e9b",
    assignedToStaffUuids: [
      "123e4567-89bf-403a-9975-22bb0c8287ab",
    ],
    assignedTimestamp: "2025-05-01 12:00:00",
    assignedByStaffUuid: "123e4567-3abc-4757-bf6e-22bb0b589f5b",
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


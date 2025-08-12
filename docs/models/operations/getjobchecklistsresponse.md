# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-a45e-4b34-9dfc-231d28fc1bfb",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-e038-4191-a6c4-231d291c20db",
  completedTimestamp: "2025-08-01 12:00:00",
  completedByStaffUuid: "123e4567-6fd3-4e61-8986-231d2580b48b",
  completedDuringCheckinUuid: "123e4567-7871-4c85-93d9-231d29906c5b",
  regardingObjectUuid: "123e4567-dd28-4297-9885-231d2f854a3b",
  fulfilledByObjectUuid: "123e4567-571e-4101-a5b7-231d2212db0b",
  assignedToStaffUuids: [
    "123e4567-e211-4947-ad83-231d23cd30ab",
  ],
  assignedTimestamp: "2025-08-01 12:00:00",
  assignedByStaffUuid: "123e4567-aad3-4047-88cc-231d26dd7f7b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


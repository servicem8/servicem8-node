# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-46a4-49b0-8d99-2308e515233b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-7cb6-4555-9af3-2308e941f70b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-8f88-4e0b-9eaa-2308eda1055b",
  completedDuringCheckinUuid: "123e4567-6532-4809-84d6-2308e659127b",
  regardingObjectUuid: "123e4567-93c0-4943-9169-2308e478f0cb",
  fulfilledByObjectUuid: "123e4567-d39d-44a2-b4dd-2308ee14ef1b",
  assignedToStaffUuids: [
    "123e4567-9fc9-4131-91ba-2308e5c27deb",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-cc41-451b-a020-2308e3c778cb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


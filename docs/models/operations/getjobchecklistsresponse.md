# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-3aa2-4e6b-9f4b-2302f248029b",
  editDate: "2025-07-01 12:00:00",
  jobUuid: "123e4567-c499-4d7d-bd23-2302f54a041b",
  completedTimestamp: "2025-07-01 12:00:00",
  completedByStaffUuid: "123e4567-b761-4a58-8e4a-2302f9e7778b",
  completedDuringCheckinUuid: "123e4567-85fc-411e-b2d5-2302f611ad9b",
  regardingObjectUuid: "123e4567-28f0-401f-a34b-2302f68739bb",
  fulfilledByObjectUuid: "123e4567-baf3-422a-8d58-2302f7ba820b",
  assignedToStaffUuids: [
    "123e4567-3226-43b9-aeee-2302f4404a2b",
  ],
  assignedTimestamp: "2025-07-01 12:00:00",
  assignedByStaffUuid: "123e4567-44cc-4069-855d-2302fe9ef22b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-4d5b-4e6a-8737-22e82c76450b",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-d399-4fa2-ae62-22e82fad2bfb",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-442c-4da8-abc8-22e820f442fb",
  completedDuringCheckinUuid: "123e4567-ca5f-45b5-a61c-22e821db990b",
  regardingObjectUuid: "123e4567-a316-490e-bf43-22e823076e9b",
  fulfilledByObjectUuid: "123e4567-0dff-468d-a181-22e8203ceabb",
  assignedToStaffUuids: [
    "123e4567-fa30-4868-98dd-22e82c4df3ab",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-2fdf-4450-ab87-22e8276768db",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


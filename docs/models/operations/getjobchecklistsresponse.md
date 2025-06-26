# GetJobChecklistsResponse


## Supported Types

### `components.JobChecklist`

```typescript
const value: components.JobChecklist = {
  uuid: "123e4567-a276-4e7c-bdd8-22ed3cef52db",
  editDate: "2025-06-01 12:00:00",
  jobUuid: "123e4567-5c4c-4251-bf5c-22ed3953374b",
  completedTimestamp: "2025-06-01 12:00:00",
  completedByStaffUuid: "123e4567-237e-492e-8419-22ed30c8a4bb",
  completedDuringCheckinUuid: "123e4567-f349-433c-b972-22ed359e07bb",
  regardingObjectUuid: "123e4567-effc-4f25-886b-22ed3b5f52eb",
  fulfilledByObjectUuid: "123e4567-7079-4e82-a9a9-22ed39bbe58b",
  assignedToStaffUuids: [
    "123e4567-52fc-47a1-951f-22ed3ff79fcb",
  ],
  assignedTimestamp: "2025-06-01 12:00:00",
  assignedByStaffUuid: "123e4567-047a-44de-851e-22ed36770adb",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


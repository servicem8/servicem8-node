# ListJobChecklistsResponse


## Supported Types

### `components.JobChecklist[]`

```typescript
const value: components.JobChecklist[] = [
  {
    uuid: "123e4567-d23f-45ab-9e99-22b56dcd822b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    jobUuid: "123e4567-52e2-4bca-a817-22b56589a83b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-b6aa-4db3-90ec-22b56f7b6e7b",
    completedDuringCheckinUuid: "123e4567-b7c2-459a-bdb4-22b56ced425b",
    regardingObjectUuid: "123e4567-6e78-4d12-a356-22b56a63f5db",
    fulfilledByObjectUuid: "123e4567-57ad-4cfa-977d-22b5641f3fab",
    assignedToStaffUuids: [
      "123e4567-5007-419f-a945-22b5675c3cdb",
    ],
    assignedTimestamp: "YYYY-MM-DD HH:MM:SS",
    assignedByStaffUuid: "123e4567-6679-4e5d-866e-22b56995605b",
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


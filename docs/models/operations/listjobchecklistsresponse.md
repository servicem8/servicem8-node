# ListJobChecklistsResponse


## Supported Types

### `components.JobChecklist[]`

```typescript
const value: components.JobChecklist[] = [
  {
    uuid: "123e4567-e29c-443f-b1ce-22bcbb1586fb",
    editDate: "2025-05-01 12:00:00",
    jobUuid: "123e4567-ca38-48f3-8cd0-22bcb6c5997b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-5139-49ac-9c90-22bcb4a5354b",
    completedDuringCheckinUuid: "123e4567-813e-40de-adb0-22bcb1db1c0b",
    regardingObjectUuid: "123e4567-574d-4af4-877c-22bcb214f79b",
    fulfilledByObjectUuid: "123e4567-9356-4231-a05e-22bcbfe034cb",
    assignedToStaffUuids: [
      "123e4567-6f22-4e1c-92dd-22bcbbc9c54b",
    ],
    assignedTimestamp: "2025-05-01 12:00:00",
    assignedByStaffUuid: "123e4567-1731-4326-84d4-22bcbf28389b",
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


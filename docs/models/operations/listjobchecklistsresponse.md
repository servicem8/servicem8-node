# ListJobChecklistsResponse


## Supported Types

### `components.JobChecklist[]`

```typescript
const value: components.JobChecklist[] = [
  {
    uuid: "123e4567-dc4f-45a1-9c97-22b70ea97c2b",
    editDate: "2025-05-01 12:00:00",
    jobUuid: "123e4567-6d91-4ded-bdb1-22b70e67711b",
    completedTimestamp: "2025-05-01 12:00:00",
    completedByStaffUuid: "123e4567-9861-41c9-beff-22b7012e795b",
    completedDuringCheckinUuid: "123e4567-533f-412a-8840-22b706184ffb",
    regardingObjectUuid: "123e4567-867b-4b57-8f0a-22b708d5a45b",
    fulfilledByObjectUuid: "123e4567-d6d6-4eb9-9283-22b70c6bd8cb",
    assignedToStaffUuids: [
      "123e4567-6f91-40b8-a045-22b703d4e34b",
    ],
    assignedTimestamp: "2025-05-01 12:00:00",
    assignedByStaffUuid: "123e4567-dbd3-437f-a95e-22b70bccadeb",
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


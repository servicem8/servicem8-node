# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-41a2-42b9-aa8a-2308e984097b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-762b-461d-b217-2308e8bdce8b",
    staffUuid: "123e4567-f3be-4b61-b082-2308eb80eb8b",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-4541-4c64-b3b3-2308ee3259ab",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-f6e1-408d-9607-2308ec8393eb",
    editByStaffUuid: "123e4567-ff05-47dc-81ba-2308ec23992b",
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


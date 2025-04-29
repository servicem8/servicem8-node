# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-a1bd-49bb-bdf8-22b4d64a2feb",
    editDate: "YYYY-MM-DD HH:MM:SS",
    jobUuid: "123e4567-cf75-4525-80d6-22b4d383748b",
    staffUuid: "123e4567-db25-4d06-80fa-22b4d92f9b7b",
    startDate: "YYYY-MM-DD HH:MM:SS",
    endDate: "YYYY-MM-DD HH:MM:SS",
    hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
    allocatedByStaffUuid: "123e4567-fb76-4cd6-98e4-22b4ddb2c40b",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    materialUuid: "123e4567-0f6f-4f02-a47d-22b4d0a0628b",
    editByStaffUuid: "123e4567-e5bf-42ea-b1e6-22b4dc7c836b",
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


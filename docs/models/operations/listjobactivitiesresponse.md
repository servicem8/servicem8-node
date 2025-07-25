# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-222d-4b23-9437-230b76f7528b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-ce4a-4bf8-8059-230b7609915b",
    staffUuid: "123e4567-2e7c-4f72-982a-230b7bd254db",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-f1aa-4493-a287-230b7e725efb",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-df01-4804-b86c-230b73c0699b",
    editByStaffUuid: "123e4567-346d-44f2-913e-230b7d2f468b",
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


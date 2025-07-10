# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-c878-4129-bcf8-22fc0e044ddb",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-862c-4451-af81-22fc0a5382db",
    staffUuid: "123e4567-dad4-462e-9fb1-22fc018b40eb",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-0abe-4edf-bb69-22fc0014af0b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-d3b1-473f-8a6b-22fc064f796b",
    editByStaffUuid: "123e4567-4771-4b03-9759-22fc08b41e9b",
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


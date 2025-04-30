# GetJobActivitiesResponse


## Supported Types

### `components.JobActivity`

```typescript
const value: components.JobActivity = {
  uuid: "123e4567-965c-4e31-a945-22b56b9f79eb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  jobUuid: "123e4567-9a7e-4cd1-990c-22b56cf4426b",
  staffUuid: "123e4567-9ea0-4a02-b6d2-22b567420a8b",
  startDate: "YYYY-MM-DD HH:MM:SS",
  endDate: "YYYY-MM-DD HH:MM:SS",
  hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
  allocatedByStaffUuid: "123e4567-35b8-478c-92a3-22b567abeb1b",
  allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
  materialUuid: "123e4567-093b-4f55-aab2-22b56462c0eb",
  editByStaffUuid: "123e4567-84f7-4969-8d95-22b561ed098b",
};
```

### `components.ErrorT`

```typescript
const value: components.ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```


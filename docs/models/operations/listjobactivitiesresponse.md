# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-f2c9-420f-8629-231cfa61025b",
    editDate: "2025-08-01 12:00:00",
    jobUuid: "123e4567-f4bd-47e0-bae6-231cf3fd344b",
    staffUuid: "123e4567-4fc9-480f-bc88-231cfad9d7cb",
    startDate: "2025-08-01 12:00:00",
    endDate: "2025-08-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-08-01 12:00:00",
    allocatedByStaffUuid: "123e4567-03ff-457e-b37d-231cf424b7fb",
    allocatedTimestamp: "2025-08-01 12:00:00",
    materialUuid: "123e4567-3785-4e66-ad99-231cfb6d436b",
    editByStaffUuid: "123e4567-14bd-4a10-bcd5-231cf8e577db",
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


# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-d101-4871-8bfe-22ec73bebfab",
    editDate: "2025-06-01 12:00:00",
    jobUuid: "123e4567-5e6b-497d-8dbb-22ec7f98258b",
    staffUuid: "123e4567-d651-4240-ad08-22ec718486fb",
    startDate: "2025-06-01 12:00:00",
    endDate: "2025-06-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-06-01 12:00:00",
    allocatedByStaffUuid: "123e4567-417f-4737-822b-22ec7398ab5b",
    allocatedTimestamp: "2025-06-01 12:00:00",
    materialUuid: "123e4567-cc47-4a62-864d-22ec7a2e543b",
    editByStaffUuid: "123e4567-bbc4-47c1-8703-22ec7523d07b",
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


# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-37eb-40ed-886b-22f4556534ab",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-9321-4101-a112-22f4554da98b",
    staffUuid: "123e4567-9bd4-40df-8cd1-22f45800b8db",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-f48c-4f58-974a-22f45885fb8b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-2d38-4bf0-a311-22f45ba911cb",
    editByStaffUuid: "123e4567-58e1-42a3-a44f-22f45de42d2b",
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


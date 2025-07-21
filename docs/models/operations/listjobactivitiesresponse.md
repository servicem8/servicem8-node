# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-f479-4802-aa8a-23076e0a07bb",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-6369-4f64-83d9-230769bcb86b",
    staffUuid: "123e4567-a7f8-4fde-897e-23076a5998eb",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-f74d-437d-a5d7-2307660fb69b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-45d4-4439-bddf-23076746356b",
    editByStaffUuid: "123e4567-8529-4962-8b69-230763cb10db",
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


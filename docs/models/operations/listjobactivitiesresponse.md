# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-414b-409d-a0cc-231104c8953b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-3dcb-4bce-9276-23110867d7cb",
    staffUuid: "123e4567-da0d-470e-9734-231109867e7b",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-ec99-4138-aaa2-23110f57af3b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-ce03-4320-a78d-231103d9badb",
    editByStaffUuid: "123e4567-bbcf-4892-ac25-231109c3b2cb",
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


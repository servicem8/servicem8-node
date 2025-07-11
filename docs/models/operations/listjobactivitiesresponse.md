# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-fae4-491f-9672-22fd8f61f39b",
    editDate: "2025-07-01 12:00:00",
    jobUuid: "123e4567-8036-4dbd-b374-22fd86a950db",
    staffUuid: "123e4567-e760-45e4-beab-22fd877ef1cb",
    startDate: "2025-07-01 12:00:00",
    endDate: "2025-07-01 12:00:00",
    hasBeenOpenedTimestamp: "2025-07-01 12:00:00",
    allocatedByStaffUuid: "123e4567-d7dc-4af3-afe3-22fd8b4b594b",
    allocatedTimestamp: "2025-07-01 12:00:00",
    materialUuid: "123e4567-a31c-4d0b-9943-22fd847e165b",
    editByStaffUuid: "123e4567-bf64-432f-8466-22fd87323d6b",
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


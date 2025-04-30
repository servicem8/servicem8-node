# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-06ff-4117-b182-22b567faf18b",
    editDate: "YYYY-MM-DD HH:MM:SS",
    jobUuid: "123e4567-d453-4e9b-b59d-22b56128809b",
    staffUuid: "123e4567-7463-4f2f-95a8-22b566eb6e9b",
    startDate: "YYYY-MM-DD HH:MM:SS",
    endDate: "YYYY-MM-DD HH:MM:SS",
    hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
    allocatedByStaffUuid: "123e4567-aa6e-4fc1-b29f-22b568f7d0cb",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    materialUuid: "123e4567-1b85-4873-b530-22b56f2a05ab",
    editByStaffUuid: "123e4567-0c53-45bc-8747-22b568a18a4b",
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


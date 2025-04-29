# ListJobActivitiesResponse


## Supported Types

### `components.JobActivity[]`

```typescript
const value: components.JobActivity[] = [
  {
    uuid: "123e4567-1fda-42d1-83c1-22b4dbbc1fcb",
    editDate: "YYYY-MM-DD HH:MM:SS",
    jobUuid: "123e4567-ca5c-4bae-bc7f-22b4dbd153db",
    staffUuid: "123e4567-4790-4b80-b7cc-22b4d783ffeb",
    startDate: "YYYY-MM-DD HH:MM:SS",
    endDate: "YYYY-MM-DD HH:MM:SS",
    hasBeenOpenedTimestamp: "YYYY-MM-DD HH:MM:SS",
    allocatedByStaffUuid: "123e4567-e4ed-40d8-8e5a-22b4d02fc29b",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    materialUuid: "123e4567-9bf7-4a38-82cb-22b4d4df40cb",
    editByStaffUuid: "123e4567-ccba-4417-8b6d-22b4d0b5501b",
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


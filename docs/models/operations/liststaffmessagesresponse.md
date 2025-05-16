# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-a386-407f-acb8-22bdccbe5d4b",
    editDate: "2025-05-01 12:00:00",
    fromStaffUuid: "123e4567-8abd-4bdd-bbb2-22bdc914b04b",
    toStaffUuid: "123e4567-1f97-41aa-8cdb-22bdcfc231bb",
    sentTimestamp: "2025-05-01 12:00:00",
    deliveredTimestamp: "2025-05-01 12:00:00",
    readTimestamp: "2025-05-01 12:00:00",
    regardingJobUuid: "123e4567-8e35-4b3b-aa11-22bdc0ed42eb",
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


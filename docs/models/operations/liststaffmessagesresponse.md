# ListStaffMessagesResponse


## Supported Types

### `components.StaffMessage[]`

```typescript
const value: components.StaffMessage[] = [
  {
    uuid: "123e4567-1746-4168-8eba-2302faa9d68b",
    editDate: "2025-07-01 12:00:00",
    fromStaffUuid: "123e4567-a75a-47f8-84e1-2302fcc6fc0b",
    toStaffUuid: "123e4567-9817-481c-866e-2302fbf750cb",
    sentTimestamp: "2025-07-01 12:00:00",
    deliveredTimestamp: "2025-07-01 12:00:00",
    readTimestamp: "2025-07-01 12:00:00",
    regardingJobUuid: "123e4567-dfaa-4aac-8366-2302f62d79cb",
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


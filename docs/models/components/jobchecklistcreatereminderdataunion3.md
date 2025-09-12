# JobChecklistCreateReminderDataUnion3

JSON data containing additional information for the reminder. Format depends on the reminder_type. For ABSOLUTE_DATETIME, includes 'absoluteDateTime'. For RELATIVE_DATETIME, includes 'relativeDateTime' with 'baseDate', 'unit', and 'quantity'. Exposed via API as 'reminder_data'.


## Supported Types

### `components.JobChecklistCreateReminderDataUnion1`

```typescript
const value: components.JobChecklistCreateReminderDataUnion1 = {
  absoluteDateTime: "<value>",
};
```

### `components.JobChecklistCreateReminderDataUnion2`

```typescript
const value: components.JobChecklistCreateReminderDataUnion2 = "<value>";
```


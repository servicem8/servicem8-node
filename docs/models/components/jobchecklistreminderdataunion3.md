# JobChecklistReminderDataUnion3

JSON data containing additional information for the reminder. Format depends on the reminder_type. For ABSOLUTE_DATETIME, includes 'absoluteDateTime'. For RELATIVE_DATETIME, includes 'relativeDateTime' with 'baseDate', 'unit', and 'quantity'. Exposed via API as 'reminder_data'.


## Supported Types

### `components.JobChecklistReminderDataUnion1`

```typescript
const value: components.JobChecklistReminderDataUnion1 = {
  absoluteDateTime: "<value>",
};
```

### `components.JobChecklistReminderDataUnion2`

```typescript
const value: components.JobChecklistReminderDataUnion2 = "<value>";
```


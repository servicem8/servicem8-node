# JobChecklistRelativeDateTime

## Example Usage

```typescript
import { JobChecklistRelativeDateTime } from "servicem8/models/components";

let value: JobChecklistRelativeDateTime = {
  baseDate: "NEXT_BOOKING_TIME",
  unit: "DAY",
  quantity: 371176,
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseDate`                                                                                                                                                           | [components.JobChecklistBaseDate](../../models/components/jobchecklistbasedate.md)                                                                                   | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `unit`                                                                                                                                                               | [components.JobChecklistUnit](../../models/components/jobchecklistunit.md)                                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `quantity`                                                                                                                                                           | *number*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Number of units to add/subtract from base date. Negative quantities mean the reminder occurs before the base date. Reminders scheduled into the past will not occur. |
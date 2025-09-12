# JobChecklistCreateRelativeDateTime

## Example Usage

```typescript
import { JobChecklistCreateRelativeDateTime } from "servicem8/models/components";

let value: JobChecklistCreateRelativeDateTime = {
  baseDate: "NEXT_BOOKING_TIME",
  unit: "MINUTE",
  quantity: 22968,
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseDate`                                                                                                                                                           | [components.JobChecklistCreateBaseDate](../../models/components/jobchecklistcreatebasedate.md)                                                                       | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `unit`                                                                                                                                                               | [components.JobChecklistCreateUnit](../../models/components/jobchecklistcreateunit.md)                                                                               | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `quantity`                                                                                                                                                           | *number*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Number of units to add/subtract from base date. Negative quantities mean the reminder occurs before the base date. Reminders scheduled into the past will not occur. |
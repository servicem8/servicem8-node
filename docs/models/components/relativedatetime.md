# RelativeDateTime

## Example Usage

```typescript
import { RelativeDateTime } from "servicem8/models/components";

let value: RelativeDateTime = {
  baseDate: "JOB_CREATE_TIME",
  unit: "MINUTE",
  quantity: 879203,
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseDate`                                                                                                                                                           | [components.BaseDate](../../models/components/basedate.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `unit`                                                                                                                                                               | [components.Unit](../../models/components/unit.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `quantity`                                                                                                                                                           | *number*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | Number of units to add/subtract from base date. Negative quantities mean the reminder occurs before the base date. Reminders scheduled into the past will not occur. |
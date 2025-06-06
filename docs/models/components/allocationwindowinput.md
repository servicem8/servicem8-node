# AllocationWindowInput

## Example Usage

```typescript
import { AllocationWindowInput } from "servicem8/models/components";

let value: AllocationWindowInput = {
  uuid: "123e4567-77a5-412c-8ed9-22d9d46c529b",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique identifier for this record                                                      | 123e4567-77a5-412c-8ed9-22d9d46c529b                                                   |
| `active`                                                                               | [components.AllocationWindowActive](../../models/components/allocationwindowactive.md) | :heavy_minus_sign:                                                                     | Record active/deleted flag.  Valid values are [0,1]                                    |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `startTime`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `endTime`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `sortPriority`                                                                         | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
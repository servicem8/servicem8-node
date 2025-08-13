# AllocationWindowInput

## Example Usage

```typescript
import { AllocationWindowInput } from "servicem8/models/components";

let value: AllocationWindowInput = {
  uuid: "123e4567-482d-4d1e-8e8f-231ef0de1afb",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique identifier for this record                                                      | 123e4567-482d-4d1e-8e8f-231ef0de1afb                                                   |
| `active`                                                                               | [components.AllocationWindowActive](../../models/components/allocationwindowactive.md) | :heavy_minus_sign:                                                                     | Record active/deleted flag.  Valid values are [0,1]                                    |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `startTime`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `endTime`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `sortPriority`                                                                         | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
# AllocationWindow

## Example Usage

```typescript
import { AllocationWindow } from "servicem8/models/components";

let value: AllocationWindow = {
  uuid: "123e4567-9b04-4693-8358-22b568c50f6b",
  editDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Record UUID key                                                                        | 123e4567-9b04-4693-8358-22b568c50f6b                                                   |
| `active`                                                                               | [components.AllocationWindowActive](../../models/components/allocationwindowactive.md) | :heavy_minus_sign:                                                                     | Record active/deleted flag. <br/><br/>Valid values are [0,1]                           |                                                                                        |
| `editDate`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Record last modified timestamp                                                         | YYYY-MM-DD HH:MM:SS                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `startTime`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `endTime`                                                                              | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `sortPriority`                                                                         | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
# UpdateAllocationWindowsRequest

## Example Usage

```typescript
import { UpdateAllocationWindowsRequest } from "servicem8/models/operations";

let value: UpdateAllocationWindowsRequest = {
  uuid: "5b363be4-e15a-4061-8b85-d88f298d8e24",
  allocationWindowCreate: {
    uuid: "123e4567-d0f1-4e7c-a965-23422e3fb2eb",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Allocation Window                                                          |
| `allocationWindowCreate`                                                               | [components.AllocationWindowCreate](../../models/components/allocationwindowcreate.md) | :heavy_check_mark:                                                                     | Allocation Window fields to update                                                     |
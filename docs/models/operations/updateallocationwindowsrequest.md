# UpdateAllocationWindowsRequest

## Example Usage

```typescript
import { UpdateAllocationWindowsRequest } from "servicem8/models/operations";

let value: UpdateAllocationWindowsRequest = {
  uuid: "5b363be4-e15a-4061-8b85-d88f298d8e24",
  allocationWindowCreate: {
    uuid: "123e4567-554d-4cc7-b1a9-23c6f751245b",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Allocation Window                                                          |
| `allocationWindowCreate`                                                               | [components.AllocationWindowCreate](../../models/components/allocationwindowcreate.md) | :heavy_check_mark:                                                                     | Allocation Window fields to update                                                     |
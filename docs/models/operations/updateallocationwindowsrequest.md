# UpdateAllocationWindowsRequest

## Example Usage

```typescript
import { UpdateAllocationWindowsRequest } from "servicem8/models/operations";

let value: UpdateAllocationWindowsRequest = {
  uuid: "5b363be4-e15a-4061-8b85-d88f298d8e24",
  allocationWindow: {
    uuid: "123e4567-08b8-4e2f-b2e8-2302fba013db",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uuid`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | UUID of the Allocation Window                                                        |
| `allocationWindow`                                                                   | [components.AllocationWindowInput](../../models/components/allocationwindowinput.md) | :heavy_check_mark:                                                                   | Allocation Window fields to update                                                   |
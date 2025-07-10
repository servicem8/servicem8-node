# SnoozeInboxMessageRequest

## Example Usage

```typescript
import { SnoozeInboxMessageRequest } from "servicem8/models/operations";

let value: SnoozeInboxMessageRequest = {
  uuid: "8bea1080-d10f-4896-9d51-24b622ab49b0",
  snoozeRequest: {},
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the inbox message                                            |
| `snoozeRequest`                                                      | [components.SnoozeRequest](../../models/components/snoozerequest.md) | :heavy_check_mark:                                                   | N/A                                                                  |
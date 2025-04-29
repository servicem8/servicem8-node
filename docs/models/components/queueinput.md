# QueueInput

## Example Usage

```typescript
import { QueueInput } from "servicem8/models/components";

let value: QueueInput = {
  uuid: "123e4567-6fa0-4c3a-b106-22b4d9c51a9b",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-6fa0-4c3a-b106-22b4d9c51a9b                                           |
| `active`                                                                       | [components.QueueActive](../../models/components/queueactive.md)               | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `defaultTimeframe`                                                             | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `subscribedStaff`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `requiresAssignment`                                                           | [components.RequiresAssignment](../../models/components/requiresassignment.md) | :heavy_minus_sign:                                                             | <br/><br/>Valid values are [0,1]                                               |                                                                                |
# Queue

## Example Usage

```typescript
import { Queue } from "servicem8/models/components";

let value: Queue = {
  uuid: "123e4567-a833-429a-bbb4-22b5653696cb",
  editDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-a833-429a-bbb4-22b5653696cb                                           |
| `active`                                                                       | [components.QueueActive](../../models/components/queueactive.md)               | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `editDate`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Record last modified timestamp                                                 | YYYY-MM-DD HH:MM:SS                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `defaultTimeframe`                                                             | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `subscribedStaff`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `requiresAssignment`                                                           | [components.RequiresAssignment](../../models/components/requiresassignment.md) | :heavy_minus_sign:                                                             | <br/><br/>Valid values are [0,1]                                               |                                                                                |
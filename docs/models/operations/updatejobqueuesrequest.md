# UpdateJobQueuesRequest

## Example Usage

```typescript
import { UpdateJobQueuesRequest } from "servicem8/models/operations";

let value: UpdateJobQueuesRequest = {
  uuid: "bb6dd9c8-af5b-4307-8d0a-649246c07828",
  queueCreate: {
    uuid: "123e4567-8569-4fa7-9b08-23c6f3ec70fb",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Job Queue                                            |
| `queueCreate`                                                    | [components.QueueCreate](../../models/components/queuecreate.md) | :heavy_check_mark:                                               | Job Queue fields to update                                       |
# UpdateJobQueuesRequest

## Example Usage

```typescript
import { UpdateJobQueuesRequest } from "servicem8/models/operations";

let value: UpdateJobQueuesRequest = {
  uuid: "bb6dd9c8-af5b-4307-8d0a-649246c07828",
  queue: {
    uuid: "123e4567-a3a6-4955-8077-22b6c9f989eb",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Job Queue                                          |
| `queue`                                                        | [components.QueueInput](../../models/components/queueinput.md) | :heavy_check_mark:                                             | Job Queue fields to update                                     |
# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContactCreate: {
    jobUuid: "123e4567-defc-4636-bfb3-233c649bc23b",
    uuid: "123e4567-9629-4f5f-868a-233c6abc950b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Contact                                                    |
| `jobContactCreate`                                                         | [components.JobContactCreate](../../models/components/jobcontactcreate.md) | :heavy_check_mark:                                                         | Job Contact fields to update                                               |
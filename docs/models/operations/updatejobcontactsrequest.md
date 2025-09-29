# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContactCreate: {
    jobUuid: "123e4567-0f6e-481a-b5ff-23497896664b",
    uuid: "123e4567-35fd-4fc8-abb6-2349792b778b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Contact                                                    |
| `jobContactCreate`                                                         | [components.JobContactCreate](../../models/components/jobcontactcreate.md) | :heavy_check_mark:                                                         | Job Contact fields to update                                               |
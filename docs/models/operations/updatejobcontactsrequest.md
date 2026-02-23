# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContactCreate: {
    jobUuid: "123e4567-ab0b-4e57-99da-23d593b6514b",
    uuid: "123e4567-d8ad-47ae-aa87-23d59af0b23b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Contact                                                    |
| `jobContactCreate`                                                         | [components.JobContactCreate](../../models/components/jobcontactcreate.md) | :heavy_check_mark:                                                         | Job Contact fields to update                                               |
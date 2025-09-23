# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContactCreate: {
    jobUuid: "123e4567-c212-4213-98da-23467ea922eb",
    uuid: "123e4567-3c8f-4548-ac99-234670c95ecb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Contact                                                    |
| `jobContactCreate`                                                         | [components.JobContactCreate](../../models/components/jobcontactcreate.md) | :heavy_check_mark:                                                         | Job Contact fields to update                                               |
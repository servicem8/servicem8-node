# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContactCreate: {
    jobUuid: "123e4567-adb3-424f-a030-23eb2b5a54ab",
    uuid: "123e4567-8586-4e35-bc34-23eb2c26530b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Contact                                                    |
| `jobContactCreate`                                                         | [components.JobContactCreate](../../models/components/jobcontactcreate.md) | :heavy_check_mark:                                                         | Job Contact fields to update                                               |
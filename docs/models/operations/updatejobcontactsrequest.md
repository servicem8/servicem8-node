# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContact: {
    uuid: "123e4567-6db3-43d6-ab8c-22b565d7f76b",
    jobUuid: "123e4567-1099-4214-b9b0-22b56ff91cdb",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Contact                                                  |
| `jobContact`                                                             | [components.JobContactInput](../../models/components/jobcontactinput.md) | :heavy_check_mark:                                                       | Job Contact fields to update                                             |
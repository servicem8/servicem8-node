# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContact: {
    uuid: "123e4567-1800-4ea0-8ae0-2320a936fefb",
    jobUuid: "123e4567-7cb7-40bb-8adc-2320a60d0dfb",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Contact                                                  |
| `jobContact`                                                             | [components.JobContactInput](../../models/components/jobcontactinput.md) | :heavy_check_mark:                                                       | Job Contact fields to update                                             |
# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContact: {
    uuid: "123e4567-a980-4784-aa99-22bcb16b418b",
    jobUuid: "123e4567-cdd3-43b2-a44b-22bcba57ac9b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Contact                                                  |
| `jobContact`                                                             | [components.JobContactInput](../../models/components/jobcontactinput.md) | :heavy_check_mark:                                                       | Job Contact fields to update                                             |
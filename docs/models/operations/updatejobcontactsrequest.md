# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContact: {
    uuid: "123e4567-75f7-43a3-b6cd-22bcbf4f1f1b",
    jobUuid: "123e4567-b452-4c7f-ac40-22bcb704d81b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Contact                                                  |
| `jobContact`                                                             | [components.JobContactInput](../../models/components/jobcontactinput.md) | :heavy_check_mark:                                                       | Job Contact fields to update                                             |
# UpdateJobContactsRequest

## Example Usage

```typescript
import { UpdateJobContactsRequest } from "servicem8/models/operations";

let value: UpdateJobContactsRequest = {
  uuid: "13a3c3db-d688-4b7f-8fbf-23387e342b07",
  jobContact: {
    uuid: "123e4567-25be-4189-b616-22fc0c5ca79b",
    jobUuid: "123e4567-08c5-40fb-93df-22fc07b8b4ab",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Job Contact                                                  |
| `jobContact`                                                             | [components.JobContactInput](../../models/components/jobcontactinput.md) | :heavy_check_mark:                                                       | Job Contact fields to update                                             |
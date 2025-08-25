# CreateInboxMessageRequest

## Example Usage

```typescript
import { CreateInboxMessageRequest } from "servicem8/models/components";

let value: CreateInboxMessageRequest = {
  subject: "<value>",
  messageText: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `subject`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | Subject of the message                                                                      |
| `messageText`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | Plain text content of the message                                                           |
| `fromName`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Name of the sender                                                                          |
| `fromEmail`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | Email address of the sender                                                                 |
| `jsonData`                                                                                  | Record<string, *any*>                                                                       | :heavy_minus_sign:                                                                          | Additional data to be used when converting the message to a job                             |
| `jobData`                                                                                   | [components.JobData](../../models/components/jobdata.md)                                    | :heavy_minus_sign:                                                                          | Structured job data that will be merged into json_data when converting the message to a job |
| `regardingCompanyUuid`                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | UUID of the company this message is regarding                                               |
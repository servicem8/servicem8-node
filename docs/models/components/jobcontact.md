# JobContact

## Example Usage

```typescript
import { JobContact } from "servicem8/models/components";

let value: JobContact = {
  uuid: "123e4567-b2cb-4295-a0f1-22b4d27b099b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  jobUuid: "123e4567-cee6-4c59-8d5c-22b4d898e0ab",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Record UUID key                                                            | 123e4567-b2cb-4295-a0f1-22b4d27b099b                                       |
| `active`                                                                   | [components.JobContactActive](../../models/components/jobcontactactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag. <br/><br/>Valid values are [0,1]               |                                                                            |
| `editDate`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Record last modified timestamp                                             | YYYY-MM-DD HH:MM:SS                                                        |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-cee6-4c59-8d5c-22b4d898e0ab                                       |
| `first`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `last`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `phone`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `mobile`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `email`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isPrimaryContact`                                                         | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
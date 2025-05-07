# JobContact

## Example Usage

```typescript
import { JobContact } from "servicem8/models/components";

let value: JobContact = {
  uuid: "123e4567-6f5b-452b-9885-22bcbad552cb",
  editDate: "2025-05-01 12:00:00",
  jobUuid: "123e4567-f2b0-47da-b202-22bcb7b2228b",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for this record                                          | 123e4567-6f5b-452b-9885-22bcbad552cb                                       |
| `active`                                                                   | [components.JobContactActive](../../models/components/jobcontactactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag.  Valid values are [0,1]                        |                                                                            |
| `editDate`                                                                 | *any*                                                                      | :heavy_minus_sign:                                                         | Timestamp at which record was last modified                                | 2025-05-01 12:00:00                                                        |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-f2b0-47da-b202-22bcb7b2228b                                       |
| `first`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `last`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `phone`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `mobile`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `email`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isPrimaryContact`                                                         | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
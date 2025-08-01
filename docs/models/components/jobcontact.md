# JobContact

## Example Usage

```typescript
import { JobContact } from "servicem8/models/components";

let value: JobContact = {
  uuid: "123e4567-3eb7-421d-82fb-231260f2308b",
  editDate: "2025-08-01 12:00:00",
  jobUuid: "123e4567-491b-4fd7-87d8-2312687c001b",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for this record                                          | 123e4567-3eb7-421d-82fb-231260f2308b                                       |
| `active`                                                                   | [components.JobContactActive](../../models/components/jobcontactactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag.  Valid values are [0,1]                        |                                                                            |
| `editDate`                                                                 | *any*                                                                      | :heavy_minus_sign:                                                         | Timestamp at which record was last modified                                | 2025-08-01 12:00:00                                                        |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-491b-4fd7-87d8-2312687c001b                                       |
| `first`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `last`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `phone`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `mobile`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `email`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isPrimaryContact`                                                         | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
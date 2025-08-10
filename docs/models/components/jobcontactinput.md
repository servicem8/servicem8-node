# JobContactInput

## Example Usage

```typescript
import { JobContactInput } from "servicem8/models/components";

let value: JobContactInput = {
  uuid: "123e4567-cfd6-40fa-8a62-231848f8759b",
  jobUuid: "123e4567-bb49-4f18-8ecd-23184d48909b",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for this record                                          | 123e4567-cfd6-40fa-8a62-231848f8759b                                       |
| `active`                                                                   | [components.JobContactActive](../../models/components/jobcontactactive.md) | :heavy_minus_sign:                                                         | Record active/deleted flag.  Valid values are [0,1]                        |                                                                            |
| `jobUuid`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 123e4567-bb49-4f18-8ecd-23184d48909b                                       |
| `first`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `last`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `phone`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `mobile`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `email`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `isPrimaryContact`                                                         | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
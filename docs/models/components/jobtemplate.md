# JobTemplate

## Example Usage

```typescript
import { JobTemplate } from "servicem8/models/components";

let value: JobTemplate = {
  uuid: "123e4567-3acb-47d0-b184-23184dc7440b",
  editDate: "2025-08-01 12:00:00",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-3acb-47d0-b184-23184dc7440b                                         |
| `active`                                                                     | [components.JobTemplateActive](../../models/components/jobtemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1]                          |                                                                              |
| `editDate`                                                                   | *any*                                                                        | :heavy_minus_sign:                                                           | Timestamp at which record was last modified                                  | 2025-08-01 12:00:00                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
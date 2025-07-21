# JobTemplate

## Example Usage

```typescript
import { JobTemplate } from "servicem8/models/components";

let value: JobTemplate = {
  uuid: "123e4567-4a32-4430-b091-2306f02ac6bb",
  editDate: "2025-07-01 12:00:00",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-4a32-4430-b091-2306f02ac6bb                                         |
| `active`                                                                     | [components.JobTemplateActive](../../models/components/jobtemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1]                          |                                                                              |
| `editDate`                                                                   | *any*                                                                        | :heavy_minus_sign:                                                           | Timestamp at which record was last modified                                  | 2025-07-01 12:00:00                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
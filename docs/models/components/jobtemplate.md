# JobTemplate

## Example Usage

```typescript
import { JobTemplate } from "servicem8/models/components";

let value: JobTemplate = {
  uuid: "123e4567-e1aa-48a2-9836-230feee95b1b",
  editDate: "2025-07-01 12:00:00",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-e1aa-48a2-9836-230feee95b1b                                         |
| `active`                                                                     | [components.JobTemplateActive](../../models/components/jobtemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1]                          |                                                                              |
| `editDate`                                                                   | *any*                                                                        | :heavy_minus_sign:                                                           | Timestamp at which record was last modified                                  | 2025-07-01 12:00:00                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
# JobTemplateInput

## Example Usage

```typescript
import { JobTemplateInput } from "servicem8/models/components";

let value: JobTemplateInput = {
  uuid: "123e4567-78a7-4151-94b5-231d29b4843b",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-78a7-4151-94b5-231d29b4843b                                         |
| `active`                                                                     | [components.JobTemplateActive](../../models/components/jobtemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1]                          |                                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
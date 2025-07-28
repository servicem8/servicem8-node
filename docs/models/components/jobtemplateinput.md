# JobTemplateInput

## Example Usage

```typescript
import { JobTemplateInput } from "servicem8/models/components";

let value: JobTemplateInput = {
  uuid: "123e4567-2d21-42ed-b300-230c4137e00b",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for this record                                            | 123e4567-2d21-42ed-b300-230c4137e00b                                         |
| `active`                                                                     | [components.JobTemplateActive](../../models/components/jobtemplateactive.md) | :heavy_minus_sign:                                                           | Record active/deleted flag.  Valid values are [0,1]                          |                                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |
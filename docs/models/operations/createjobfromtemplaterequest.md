# CreateJobFromTemplateRequest

## Example Usage

```typescript
import { CreateJobFromTemplateRequest } from "servicem8/models/operations";

let value: CreateJobFromTemplateRequest = {
  uuid: "550e8400-e29b-41d4-a716-446655440000",
  jobTemplateOverrides: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the job template to clone from                                             | 550e8400-e29b-41d4-a716-446655440000                                               |
| `jobTemplateOverrides`                                                             | [components.JobTemplateOverrides](../../models/components/jobtemplateoverrides.md) | :heavy_check_mark:                                                                 | Field overrides for the new job (send an empty object to use template defaults)    |                                                                                    |
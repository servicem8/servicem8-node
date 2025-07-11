# JobTemplateOverrides

Optional field overrides when creating a job from a template. Only the following fields can be overridden: job_description, company_uuid, and job_address.

## Example Usage

```typescript
import { JobTemplateOverrides } from "servicem8/models/components";

let value: JobTemplateOverrides = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `jobDescription`           | *string*                   | :heavy_minus_sign:         | Job description            |
| `companyUuid`              | *string*                   | :heavy_minus_sign:         | UUID of the company/client |
| `jobAddress`               | *string*                   | :heavy_minus_sign:         | Street address for the job |
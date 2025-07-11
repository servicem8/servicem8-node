# JobTemplates
(*jobTemplates*)

## Overview

### Available Operations

* [createJobFromTemplate](#createjobfromtemplate) - Create a job from a template

## createJobFromTemplate

Creates a new job by cloning an existing job template. All template entities (tasks, materials, checklists, quotes, custom fields) are cloned to the new job.

#### Field Overrides
Only the following fields can be overridden when creating a job from a template:
- `job_description` - Job description
- `company_uuid` - UUID of the company/client
- `job_address` - Street address for the job

Any other fields in the request body will be ignored.

#### OAuth Scope
This endpoint requires the following OAuth scope **manage_jobs**.

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobTemplates.createJobFromTemplate({
    uuid: "550e8400-e29b-41d4-a716-446655440000",
    jobTemplateOverrides: {
      companyUuid: "550e8400-e29b-41d4-a716-446655440001",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobTemplatesCreateJobFromTemplate } from "servicem8/funcs/jobTemplatesCreateJobFromTemplate.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobTemplatesCreateJobFromTemplate(serviceM8, {
    uuid: "550e8400-e29b-41d4-a716-446655440000",
    jobTemplateOverrides: {
      companyUuid: "550e8400-e29b-41d4-a716-446655440001",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobTemplatesCreateJobFromTemplate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateJobFromTemplateRequest](../../models/operations/createjobfromtemplaterequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobFromTemplateResponse](../../models/operations/createjobfromtemplateresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 405              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
# JobMaterials
(*jobMaterials*)

## Overview

Operations related to Job Materials

### Available Operations

* [listJobMaterials](#listjobmaterials) - List all Job Materials
* [createJobMaterials](#createjobmaterials) - Create a new Job Material
* [getJobMaterials](#getjobmaterials) - Retrieve a Job Material
* [updateJobMaterials](#updatejobmaterials) - Update a Job Material
* [deleteJobMaterials](#deletejobmaterials) - Delete a Job Material

## listJobMaterials


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_job_materials**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterials.listJobMaterials();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobMaterialsListJobMaterials } from "servicem8/funcs/jobMaterialsListJobMaterials.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialsListJobMaterials(serviceM8);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListJobMaterialsResponse](../../models/operations/listjobmaterialsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createJobMaterials


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_materials**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterials.createJobMaterials({
    uuid: "123e4567-334d-4865-92d3-22b4ddcfc3db",
    jobUuid: "123e4567-951d-4781-a157-22b4dcc3c8db",
    materialUuid: "123e4567-35d4-4ddd-9169-22b4dce512ab",
    quantity: "<value>",
    taxRateUuid: "123e4567-1dd4-42c2-ad1c-22b4d3f47b6b",
    jobMaterialBundleUuid: "123e4567-402b-4069-b7c3-22b4d307a2eb",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobMaterialsCreateJobMaterials } from "servicem8/funcs/jobMaterialsCreateJobMaterials.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialsCreateJobMaterials(serviceM8, {
    uuid: "123e4567-334d-4865-92d3-22b4ddcfc3db",
    jobUuid: "123e4567-951d-4781-a157-22b4dcc3c8db",
    materialUuid: "123e4567-35d4-4ddd-9169-22b4dce512ab",
    quantity: "<value>",
    taxRateUuid: "123e4567-1dd4-42c2-ad1c-22b4d3f47b6b",
    jobMaterialBundleUuid: "123e4567-402b-4069-b7c3-22b4d307a2eb",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.JobMaterialInput](../../models/components/jobmaterialinput.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobMaterialsResponse](../../models/operations/createjobmaterialsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getJobMaterials


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_job_materials**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterials.getJobMaterials({
    uuid: "d79254ce-b994-4a50-8a99-5f1146cac7ca",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobMaterialsGetJobMaterials } from "servicem8/funcs/jobMaterialsGetJobMaterials.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialsGetJobMaterials(serviceM8, {
    uuid: "d79254ce-b994-4a50-8a99-5f1146cac7ca",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobMaterialsRequest](../../models/operations/getjobmaterialsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetJobMaterialsResponse](../../models/operations/getjobmaterialsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateJobMaterials


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_materials**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterials.updateJobMaterials({
    uuid: "e5cec741-7f2b-410a-bf65-aff4658f1c92",
    jobMaterial: {
      uuid: "123e4567-334d-4865-92d3-22b4ddcfc3db",
      jobUuid: "123e4567-951d-4781-a157-22b4dcc3c8db",
      materialUuid: "123e4567-35d4-4ddd-9169-22b4dce512ab",
      quantity: "<value>",
      taxRateUuid: "123e4567-1dd4-42c2-ad1c-22b4d3f47b6b",
      jobMaterialBundleUuid: "123e4567-402b-4069-b7c3-22b4d307a2eb",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobMaterialsUpdateJobMaterials } from "servicem8/funcs/jobMaterialsUpdateJobMaterials.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialsUpdateJobMaterials(serviceM8, {
    uuid: "e5cec741-7f2b-410a-bf65-aff4658f1c92",
    jobMaterial: {
      uuid: "123e4567-334d-4865-92d3-22b4ddcfc3db",
      jobUuid: "123e4567-951d-4781-a157-22b4dcc3c8db",
      materialUuid: "123e4567-35d4-4ddd-9169-22b4dce512ab",
      quantity: "<value>",
      taxRateUuid: "123e4567-1dd4-42c2-ad1c-22b4d3f47b6b",
      jobMaterialBundleUuid: "123e4567-402b-4069-b7c3-22b4d307a2eb",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateJobMaterialsRequest](../../models/operations/updatejobmaterialsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateJobMaterialsResponse](../../models/operations/updatejobmaterialsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteJobMaterials


			
In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_materials**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterials.deleteJobMaterials({
    uuid: "4e8876ca-968b-495e-9f73-d41227fa2e1a",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobMaterialsDeleteJobMaterials } from "servicem8/funcs/jobMaterialsDeleteJobMaterials.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialsDeleteJobMaterials(serviceM8, {
    uuid: "4e8876ca-968b-495e-9f73-d41227fa2e1a",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteJobMaterialsRequest](../../models/operations/deletejobmaterialsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteJobMaterialsResponse](../../models/operations/deletejobmaterialsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
# JobAllocations
(*jobAllocations*)

## Overview

Operations related to Job Allocations

### Available Operations

* [listJobAllocations](#listjoballocations) - List all Job Allocations
* [createJobAllocations](#createjoballocations) - Create a new Job Allocation
* [getJobAllocations](#getjoballocations) - Retrieve a Job Allocation
* [updateJobAllocations](#updatejoballocations) - Update a Job Allocation
* [deleteJobAllocations](#deletejoballocations) - Delete a Job Allocation

## listJobAllocations


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_schedule**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.listJobAllocations();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobAllocationsListJobAllocations } from "servicem8/funcs/jobAllocationsListJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsListJobAllocations(serviceM8);

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

**Promise\<[operations.ListJobAllocationsResponse](../../models/operations/listjoballocationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createJobAllocations


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_schedule**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the response header as x-record-uuid.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.createJobAllocations({
    uuid: "123e4567-80be-4bbf-843a-22b4d44e9dbb",
    jobUuid: "123e4567-fa82-4a92-95b3-22b4d98be4fb",
    queueUuid: "123e4567-48f3-4e37-8366-22b4d4aa202b",
    staffUuid: "123e4567-3767-4488-9b62-22b4d1bee3fb",
    allocationDate: "YYYY-MM-DD HH:MM:SS",
    allocationWindowUuid: "123e4567-1c17-483f-9f69-22b4dde619bb",
    allocatedByStaffUuid: "123e4567-9fe4-4526-b360-22b4d4a21dfb",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    expiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    completionTimestamp: "YYYY-MM-DD HH:MM:SS",
    acceptanceTimestamp: "YYYY-MM-DD HH:MM:SS",
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
import { jobAllocationsCreateJobAllocations } from "servicem8/funcs/jobAllocationsCreateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsCreateJobAllocations(serviceM8, {
    uuid: "123e4567-80be-4bbf-843a-22b4d44e9dbb",
    jobUuid: "123e4567-fa82-4a92-95b3-22b4d98be4fb",
    queueUuid: "123e4567-48f3-4e37-8366-22b4d4aa202b",
    staffUuid: "123e4567-3767-4488-9b62-22b4d1bee3fb",
    allocationDate: "YYYY-MM-DD HH:MM:SS",
    allocationWindowUuid: "123e4567-1c17-483f-9f69-22b4dde619bb",
    allocatedByStaffUuid: "123e4567-9fe4-4526-b360-22b4d4a21dfb",
    allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
    expiryTimestamp: "YYYY-MM-DD HH:MM:SS",
    readTimestamp: "YYYY-MM-DD HH:MM:SS",
    completionTimestamp: "YYYY-MM-DD HH:MM:SS",
    acceptanceTimestamp: "YYYY-MM-DD HH:MM:SS",
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
| `request`                                                                                                                                                                      | [components.JobAllocationInput](../../models/components/joballocationinput.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobAllocationsResponse](../../models/operations/createjoballocationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getJobAllocations


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_schedule**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.getJobAllocations({
    uuid: "0d05bbd5-edc5-48f5-97dd-9ac71aad761c",
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
import { jobAllocationsGetJobAllocations } from "servicem8/funcs/jobAllocationsGetJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsGetJobAllocations(serviceM8, {
    uuid: "0d05bbd5-edc5-48f5-97dd-9ac71aad761c",
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
| `request`                                                                                                                                                                      | [operations.GetJobAllocationsRequest](../../models/operations/getjoballocationsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetJobAllocationsResponse](../../models/operations/getjoballocationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateJobAllocations

Update a Job Allocation

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "1e2eeaa9-f021-442e-bfb3-163a7f0bbeb5",
    jobAllocation: {
      uuid: "123e4567-80be-4bbf-843a-22b4d44e9dbb",
      jobUuid: "123e4567-fa82-4a92-95b3-22b4d98be4fb",
      queueUuid: "123e4567-48f3-4e37-8366-22b4d4aa202b",
      staffUuid: "123e4567-3767-4488-9b62-22b4d1bee3fb",
      allocationDate: "YYYY-MM-DD HH:MM:SS",
      allocationWindowUuid: "123e4567-1c17-483f-9f69-22b4dde619bb",
      allocatedByStaffUuid: "123e4567-9fe4-4526-b360-22b4d4a21dfb",
      allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
      expiryTimestamp: "YYYY-MM-DD HH:MM:SS",
      readTimestamp: "YYYY-MM-DD HH:MM:SS",
      completionTimestamp: "YYYY-MM-DD HH:MM:SS",
      acceptanceTimestamp: "YYYY-MM-DD HH:MM:SS",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "1e2eeaa9-f021-442e-bfb3-163a7f0bbeb5",
    jobAllocation: {
      uuid: "123e4567-80be-4bbf-843a-22b4d44e9dbb",
      jobUuid: "123e4567-fa82-4a92-95b3-22b4d98be4fb",
      queueUuid: "123e4567-48f3-4e37-8366-22b4d4aa202b",
      staffUuid: "123e4567-3767-4488-9b62-22b4d1bee3fb",
      allocationDate: "YYYY-MM-DD HH:MM:SS",
      allocationWindowUuid: "123e4567-1c17-483f-9f69-22b4dde619bb",
      allocatedByStaffUuid: "123e4567-9fe4-4526-b360-22b4d4a21dfb",
      allocatedTimestamp: "YYYY-MM-DD HH:MM:SS",
      expiryTimestamp: "YYYY-MM-DD HH:MM:SS",
      readTimestamp: "YYYY-MM-DD HH:MM:SS",
      completionTimestamp: "YYYY-MM-DD HH:MM:SS",
      acceptanceTimestamp: "YYYY-MM-DD HH:MM:SS",
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
| `request`                                                                                                                                                                      | [operations.UpdateJobAllocationsRequest](../../models/operations/updatejoballocationsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateJobAllocationsResponse](../../models/operations/updatejoballocationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteJobAllocations


			
In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.deleteJobAllocations({
    uuid: "88d40d63-2a66-4330-9db6-6768b93c2891",
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
import { jobAllocationsDeleteJobAllocations } from "servicem8/funcs/jobAllocationsDeleteJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsDeleteJobAllocations(serviceM8, {
    uuid: "88d40d63-2a66-4330-9db6-6768b93c2891",
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
| `request`                                                                                                                                                                      | [operations.DeleteJobAllocationsRequest](../../models/operations/deletejoballocationsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteJobAllocationsResponse](../../models/operations/deletejoballocationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
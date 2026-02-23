# JobAllocations

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

<!-- UsageSnippet language="typescript" operationID="listJobAllocations" method="get" path="/joballocation.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.listJobAllocations();

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsListJobAllocations(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsListJobAllocations failed:", res.error);
  }
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

**Promise\<[components.JobAllocation[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createJobAllocations


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_schedule**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="createJobAllocations" method="post" path="/joballocation.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.createJobAllocations({
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsCreateJobAllocations(serviceM8, {
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsCreateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="createJobAllocations" method="post" path="/joballocation.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.createJobAllocations({
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsCreateJobAllocations(serviceM8, {
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsCreateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="createJobAllocations" method="post" path="/joballocation.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.createJobAllocations({
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsCreateJobAllocations(serviceM8, {
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsCreateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="createJobAllocations" method="post" path="/joballocation.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.createJobAllocations({
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsCreateJobAllocations(serviceM8, {
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsCreateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="createJobAllocations" method="post" path="/joballocation.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.createJobAllocations({
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsCreateJobAllocations(serviceM8, {
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsCreateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="createJobAllocations" method="post" path="/joballocation.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.createJobAllocations({
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsCreateJobAllocations(serviceM8, {
    jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
    staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
    allocationDate: "2026-01-01 12:00:00",
    allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
    allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
    allocatedTimestamp: "2026-01-01 12:00:00",
    expiryTimestamp: "2026-01-01 12:00:00",
    readTimestamp: "2026-01-01 12:00:00",
    completionTimestamp: "2026-01-01 12:00:00",
    uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsCreateJobAllocations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.JobAllocationCreate](../../models/components/joballocationcreate.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobAllocationsResponse](../../models/operations/createjoballocationsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getJobAllocations


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_schedule**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJobAllocations" method="get" path="/joballocation/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.getJobAllocations({
    uuid: "8def42b6-b874-4e43-b905-2857edb00c09",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsGetJobAllocations(serviceM8, {
    uuid: "8def42b6-b874-4e43-b905-2857edb00c09",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsGetJobAllocations failed:", res.error);
  }
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

**Promise\<[components.JobAllocation](../../models/components/joballocation.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.NotFoundError       | 404                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## updateJobAllocations


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_schedule**.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="updateJobAllocations" method="post" path="/joballocation/{uuid}.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "0747c9dc-c74b-43eb-814a-ae1a214754a4",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "0747c9dc-c74b-43eb-814a-ae1a214754a4",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsUpdateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="updateJobAllocations" method="post" path="/joballocation/{uuid}.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "0747c9dc-c74b-43eb-814a-ae1a214754a4",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "0747c9dc-c74b-43eb-814a-ae1a214754a4",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsUpdateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="updateJobAllocations" method="post" path="/joballocation/{uuid}.json" example="notFound" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "b2ead65c-b1be-423f-a70a-7fce99e94cec",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "b2ead65c-b1be-423f-a70a-7fce99e94cec",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsUpdateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="updateJobAllocations" method="post" path="/joballocation/{uuid}.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "1287c61b-ba58-4112-bbbd-5af201a91282",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "1287c61b-ba58-4112-bbbd-5af201a91282",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsUpdateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="updateJobAllocations" method="post" path="/joballocation/{uuid}.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "660cb041-ecc9-483f-8d7a-cac09ae7c6c2",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "660cb041-ecc9-483f-8d7a-cac09ae7c6c2",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsUpdateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="updateJobAllocations" method="post" path="/joballocation/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "583058ca-b387-4a2b-86cf-ca46e5b89aba",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "583058ca-b387-4a2b-86cf-ca46e5b89aba",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsUpdateJobAllocations failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="updateJobAllocations" method="post" path="/joballocation/{uuid}.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.updateJobAllocations({
    uuid: "583058ca-b387-4a2b-86cf-ca46e5b89aba",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
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
import { jobAllocationsUpdateJobAllocations } from "servicem8/funcs/jobAllocationsUpdateJobAllocations.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsUpdateJobAllocations(serviceM8, {
    uuid: "583058ca-b387-4a2b-86cf-ca46e5b89aba",
    jobAllocationCreate: {
      jobUuid: "123e4567-86a1-447c-a7e2-23c6f0b215eb",
      staffUuid: "123e4567-6118-40ac-bcff-23c6f1ea382b",
      allocationDate: "2026-01-01 12:00:00",
      allocationWindowUuid: "123e4567-cdd8-47db-b1bd-23c6fd498fbb",
      allocatedByStaffUuid: "123e4567-373c-493d-9f5f-23c6fb14db8b",
      allocatedTimestamp: "2026-01-01 12:00:00",
      expiryTimestamp: "2026-01-01 12:00:00",
      readTimestamp: "2026-01-01 12:00:00",
      completionTimestamp: "2026-01-01 12:00:00",
      uuid: "123e4567-f58b-4046-b1f6-23c6f9e1609b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsUpdateJobAllocations failed:", res.error);
  }
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

**Promise\<[components.Result](../../models/components/result.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.NotFoundError       | 404                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## deleteJobAllocations


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_schedule**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteJobAllocations" method="delete" path="/joballocation/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobAllocations.deleteJobAllocations({
    uuid: "daea5bca-3a80-47f9-b686-af92248ae7fa",
  });

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
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobAllocationsDeleteJobAllocations(serviceM8, {
    uuid: "daea5bca-3a80-47f9-b686-af92248ae7fa",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobAllocationsDeleteJobAllocations failed:", res.error);
  }
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

**Promise\<[components.Result](../../models/components/result.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.NotFoundError       | 404                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |
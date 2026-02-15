# JobChecklists

## Overview

Operations related to Job Checklists

### Available Operations

* [listJobChecklists](#listjobchecklists) - List all Job Checklists
* [createJobChecklists](#createjobchecklists) - Create a new Job Checklist
* [getJobChecklists](#getjobchecklists) - Retrieve a Job Checklist
* [updateJobChecklists](#updatejobchecklists) - Update a Job Checklist
* [deleteJobChecklists](#deletejobchecklists) - Delete a Job Checklist

## listJobChecklists


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_job_checklists**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listJobChecklists" method="get" path="/jobchecklist.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.listJobChecklists();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsListJobChecklists } from "servicem8/funcs/jobChecklistsListJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsListJobChecklists(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsListJobChecklists failed:", res.error);
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

**Promise\<[components.JobChecklist[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createJobChecklists


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_checklists**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="createJobChecklists" method="post" path="/jobchecklist.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsCreateJobChecklists } from "servicem8/funcs/jobChecklistsCreateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsCreateJobChecklists(serviceM8, {
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsCreateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="createJobChecklists" method="post" path="/jobchecklist.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsCreateJobChecklists } from "servicem8/funcs/jobChecklistsCreateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsCreateJobChecklists(serviceM8, {
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsCreateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="createJobChecklists" method="post" path="/jobchecklist.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsCreateJobChecklists } from "servicem8/funcs/jobChecklistsCreateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsCreateJobChecklists(serviceM8, {
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsCreateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="createJobChecklists" method="post" path="/jobchecklist.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsCreateJobChecklists } from "servicem8/funcs/jobChecklistsCreateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsCreateJobChecklists(serviceM8, {
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsCreateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="createJobChecklists" method="post" path="/jobchecklist.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsCreateJobChecklists } from "servicem8/funcs/jobChecklistsCreateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsCreateJobChecklists(serviceM8, {
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsCreateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="createJobChecklists" method="post" path="/jobchecklist.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsCreateJobChecklists } from "servicem8/funcs/jobChecklistsCreateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsCreateJobChecklists(serviceM8, {
    uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
    jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
    completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
    regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
    fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
    assignedToStaffUuids: [
      "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsCreateJobChecklists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.JobChecklistCreate](../../models/components/jobchecklistcreate.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobChecklistsResponse](../../models/operations/createjobchecklistsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getJobChecklists


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_job_checklists**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJobChecklists" method="get" path="/jobchecklist/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.getJobChecklists({
    uuid: "ea127416-d976-4053-b23c-cf463b2ad884",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsGetJobChecklists } from "servicem8/funcs/jobChecklistsGetJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsGetJobChecklists(serviceM8, {
    uuid: "ea127416-d976-4053-b23c-cf463b2ad884",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsGetJobChecklists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobChecklistsRequest](../../models/operations/getjobchecklistsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.JobChecklist](../../models/components/jobchecklist.md)\>**

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

## updateJobChecklists


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_checklists**.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.updateJobChecklists({
    uuid: "1fe0ae77-64ce-461a-9aec-81b1b9caba84",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
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
import { jobChecklistsUpdateJobChecklists } from "servicem8/funcs/jobChecklistsUpdateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsUpdateJobChecklists(serviceM8, {
    uuid: "1fe0ae77-64ce-461a-9aec-81b1b9caba84",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsUpdateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.updateJobChecklists({
    uuid: "1fe0ae77-64ce-461a-9aec-81b1b9caba84",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
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
import { jobChecklistsUpdateJobChecklists } from "servicem8/funcs/jobChecklistsUpdateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsUpdateJobChecklists(serviceM8, {
    uuid: "1fe0ae77-64ce-461a-9aec-81b1b9caba84",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsUpdateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" example="notFound" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.updateJobChecklists({
    uuid: "ee298b2f-8d80-4f39-9853-c682e85ff2e7",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
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
import { jobChecklistsUpdateJobChecklists } from "servicem8/funcs/jobChecklistsUpdateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsUpdateJobChecklists(serviceM8, {
    uuid: "ee298b2f-8d80-4f39-9853-c682e85ff2e7",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsUpdateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.updateJobChecklists({
    uuid: "51ef3e0a-c408-41d5-aa40-c1e56b84b8de",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
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
import { jobChecklistsUpdateJobChecklists } from "servicem8/funcs/jobChecklistsUpdateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsUpdateJobChecklists(serviceM8, {
    uuid: "51ef3e0a-c408-41d5-aa40-c1e56b84b8de",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsUpdateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.updateJobChecklists({
    uuid: "3ed65475-3f51-44e2-b13a-0d7dad8537a7",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
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
import { jobChecklistsUpdateJobChecklists } from "servicem8/funcs/jobChecklistsUpdateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsUpdateJobChecklists(serviceM8, {
    uuid: "3ed65475-3f51-44e2-b13a-0d7dad8537a7",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsUpdateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.updateJobChecklists({
    uuid: "cd24d8b9-7620-4771-805e-b96a73214740",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
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
import { jobChecklistsUpdateJobChecklists } from "servicem8/funcs/jobChecklistsUpdateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsUpdateJobChecklists(serviceM8, {
    uuid: "cd24d8b9-7620-4771-805e-b96a73214740",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsUpdateJobChecklists failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.updateJobChecklists({
    uuid: "cd24d8b9-7620-4771-805e-b96a73214740",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
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
import { jobChecklistsUpdateJobChecklists } from "servicem8/funcs/jobChecklistsUpdateJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsUpdateJobChecklists(serviceM8, {
    uuid: "cd24d8b9-7620-4771-805e-b96a73214740",
    jobChecklistCreate: {
      uuid: "123e4567-a8d7-4b04-85c7-23c6fde2e9ab",
      jobUuid: "123e4567-cdd5-4610-9349-23c6f3f6c7bb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-46c3-4427-93fc-23c6f26a43fb",
      completedDuringCheckinUuid: "123e4567-b648-4263-8d98-23c6f708a85b",
      regardingObjectUuid: "123e4567-d933-4890-911b-23c6f0b907bb",
      fulfilledByObjectUuid: "123e4567-db33-4239-b1b0-23c6fa1494cb",
      assignedToStaffUuids: [
        "123e4567-d3df-4a76-b653-23c6f6ee6c8b",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsUpdateJobChecklists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateJobChecklistsRequest](../../models/operations/updatejobchecklistsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteJobChecklists


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_job_checklists**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteJobChecklists" method="delete" path="/jobchecklist/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.deleteJobChecklists({
    uuid: "e197366d-b498-497a-89ee-3cb7ebfebd7b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobChecklistsDeleteJobChecklists } from "servicem8/funcs/jobChecklistsDeleteJobChecklists.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobChecklistsDeleteJobChecklists(serviceM8, {
    uuid: "e197366d-b498-497a-89ee-3cb7ebfebd7b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobChecklistsDeleteJobChecklists failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteJobChecklistsRequest](../../models/operations/deletejobchecklistsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
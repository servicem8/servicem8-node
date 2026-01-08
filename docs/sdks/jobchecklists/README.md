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

<!-- UsageSnippet language="typescript" operationID="listJobChecklists" method="get" path="/jobchecklist.json" -->
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

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createJobChecklists" method="post" path="/jobchecklist.json" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-e207-479b-b7cd-23b2e7dcd3cb",
    jobUuid: "123e4567-e95e-46b7-91d1-23b2eca19feb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-bf53-46cf-b48d-23b2ec6381eb",
    completedDuringCheckinUuid: "123e4567-8323-49bd-bad6-23b2e6a0e5cb",
    regardingObjectUuid: "123e4567-5b3d-4450-bb2d-23b2ea64c0eb",
    fulfilledByObjectUuid: "123e4567-43b2-4c8a-be9b-23b2e107a4cb",
    assignedToStaffUuids: [
      "123e4567-d76c-4712-9785-23b2e7f33f5b",
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
    uuid: "123e4567-e207-479b-b7cd-23b2e7dcd3cb",
    jobUuid: "123e4567-e95e-46b7-91d1-23b2eca19feb",
    completedTimestamp: "2026-01-01 12:00:00",
    completedByStaffUuid: "123e4567-bf53-46cf-b48d-23b2ec6381eb",
    completedDuringCheckinUuid: "123e4567-8323-49bd-bad6-23b2e6a0e5cb",
    regardingObjectUuid: "123e4567-5b3d-4450-bb2d-23b2ea64c0eb",
    fulfilledByObjectUuid: "123e4567-43b2-4c8a-be9b-23b2e107a4cb",
    assignedToStaffUuids: [
      "123e4567-d76c-4712-9785-23b2e7f33f5b",
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

<!-- UsageSnippet language="typescript" operationID="getJobChecklists" method="get" path="/jobchecklist/{uuid}.json" -->
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

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateJobChecklists" method="post" path="/jobchecklist/{uuid}.json" -->
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
      uuid: "123e4567-e207-479b-b7cd-23b2e7dcd3cb",
      jobUuid: "123e4567-e95e-46b7-91d1-23b2eca19feb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-bf53-46cf-b48d-23b2ec6381eb",
      completedDuringCheckinUuid: "123e4567-8323-49bd-bad6-23b2e6a0e5cb",
      regardingObjectUuid: "123e4567-5b3d-4450-bb2d-23b2ea64c0eb",
      fulfilledByObjectUuid: "123e4567-43b2-4c8a-be9b-23b2e107a4cb",
      assignedToStaffUuids: [
        "123e4567-d76c-4712-9785-23b2e7f33f5b",
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
      uuid: "123e4567-e207-479b-b7cd-23b2e7dcd3cb",
      jobUuid: "123e4567-e95e-46b7-91d1-23b2eca19feb",
      completedTimestamp: "2026-01-01 12:00:00",
      completedByStaffUuid: "123e4567-bf53-46cf-b48d-23b2ec6381eb",
      completedDuringCheckinUuid: "123e4567-8323-49bd-bad6-23b2e6a0e5cb",
      regardingObjectUuid: "123e4567-5b3d-4450-bb2d-23b2ea64c0eb",
      fulfilledByObjectUuid: "123e4567-43b2-4c8a-be9b-23b2e107a4cb",
      assignedToStaffUuids: [
        "123e4567-d76c-4712-9785-23b2e7f33f5b",
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

<!-- UsageSnippet language="typescript" operationID="deleteJobChecklists" method="delete" path="/jobchecklist/{uuid}.json" -->
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
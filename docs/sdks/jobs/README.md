# Jobs
(*jobs*)

## Overview

Operations related to Jobs

### Available Operations

* [listJobs](#listjobs) - List all Jobs
* [createJobs](#createjobs) - Create a new Job
* [getJobs](#getjobs) - Retrieve a Job
* [updateJobs](#updatejobs) - Update a Job
* [deleteJobs](#deletejobs) - Delete a Job

## listJobs


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_jobs**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listJobs" method="get" path="/job.json" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.listJobs();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobsListJobs } from "servicem8/funcs/jobsListJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobsListJobs(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsListJobs failed:", res.error);
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

**Promise\<[components.Job[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createJobs


			
#### OAuth Scope
This endpoint requires the following OAuth scope **create_jobs**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createJobs" method="post" path="/job.json" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.createJobs({
    createdByStaffUuid: "123e4567-112d-493c-8e86-2329b97c2cbb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-b7b6-49ff-ad51-2329b561f55b",
    status: "Unsuccessful",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-a51f-4a39-8bd6-2329b4cbb36b",
    categoryUuid: "123e4567-157a-4633-aa01-2329bcfe936b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-c023-4f9b-ac5d-2329b5a96d8b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-8763-44e4-b40b-2329b699b8ab",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-90a9-43c5-8676-2329b648021b",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-fc4e-42d1-aa87-2329b8d4a80b",
    unsuccessfulDate: "2025-08-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-08-01 12:00:00",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobsCreateJobs } from "servicem8/funcs/jobsCreateJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobsCreateJobs(serviceM8, {
    createdByStaffUuid: "123e4567-112d-493c-8e86-2329b97c2cbb",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-b7b6-49ff-ad51-2329b561f55b",
    status: "Unsuccessful",
    paymentDate: "2025-08-01 12:00:00",
    paymentActionedByUuid: "123e4567-a51f-4a39-8bd6-2329b4cbb36b",
    categoryUuid: "123e4567-157a-4633-aa01-2329bcfe936b",
    invoiceSentStamp: "2025-08-01 12:00:00",
    queueUuid: "123e4567-c023-4f9b-ac5d-2329b5a96d8b",
    queueExpiryDate: "2025-08-01 12:00:00",
    queueAssignedStaffUuid: "123e4567-8763-44e4-b40b-2329b699b8ab",
    quoteDate: "2025-08-01 12:00:00",
    quoteSentStamp: "2025-08-01 12:00:00",
    workOrderDate: "2025-08-01 12:00:00",
    uuid: "123e4567-90a9-43c5-8676-2329b648021b",
    paymentProcessedStamp: "2025-08-01 12:00:00",
    paymentReceivedStamp: "2025-08-01 12:00:00",
    completionDate: "2025-08-01 12:00:00",
    completionActionedByUuid: "123e4567-fc4e-42d1-aa87-2329b8d4a80b",
    unsuccessfulDate: "2025-08-01 12:00:00",
    jobIsScheduledUntilStamp: "2025-08-01 12:00:00",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsCreateJobs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.JobInput](../../models/components/jobinput.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobsResponse](../../models/operations/createjobsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getJobs


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_jobs**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getJobs" method="get" path="/job/{uuid}.json" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.getJobs({
    uuid: "4a01abee-06c6-4545-ba27-6a47619cf9bc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobsGetJobs } from "servicem8/funcs/jobsGetJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobsGetJobs(serviceM8, {
    uuid: "4a01abee-06c6-4545-ba27-6a47619cf9bc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsGetJobs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobsRequest](../../models/operations/getjobsrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Job](../../models/components/job.md)\>**

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

## updateJobs


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_jobs**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateJobs" method="post" path="/job/{uuid}.json" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.updateJobs({
    uuid: "f751bf5c-f1f2-4a20-8df3-7628082340b1",
    job: {
      createdByStaffUuid: "123e4567-112d-493c-8e86-2329b97c2cbb",
      date: "YYYY-MM-DD",
      companyUuid: "123e4567-b7b6-49ff-ad51-2329b561f55b",
      status: "Work Order",
      paymentDate: "2025-08-01 12:00:00",
      paymentActionedByUuid: "123e4567-a51f-4a39-8bd6-2329b4cbb36b",
      categoryUuid: "123e4567-157a-4633-aa01-2329bcfe936b",
      invoiceSentStamp: "2025-08-01 12:00:00",
      queueUuid: "123e4567-c023-4f9b-ac5d-2329b5a96d8b",
      queueExpiryDate: "2025-08-01 12:00:00",
      queueAssignedStaffUuid: "123e4567-8763-44e4-b40b-2329b699b8ab",
      quoteDate: "2025-08-01 12:00:00",
      quoteSentStamp: "2025-08-01 12:00:00",
      workOrderDate: "2025-08-01 12:00:00",
      uuid: "123e4567-90a9-43c5-8676-2329b648021b",
      paymentProcessedStamp: "2025-08-01 12:00:00",
      paymentReceivedStamp: "2025-08-01 12:00:00",
      completionDate: "2025-08-01 12:00:00",
      completionActionedByUuid: "123e4567-fc4e-42d1-aa87-2329b8d4a80b",
      unsuccessfulDate: "2025-08-01 12:00:00",
      jobIsScheduledUntilStamp: "2025-08-01 12:00:00",
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
import { jobsUpdateJobs } from "servicem8/funcs/jobsUpdateJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobsUpdateJobs(serviceM8, {
    uuid: "f751bf5c-f1f2-4a20-8df3-7628082340b1",
    job: {
      createdByStaffUuid: "123e4567-112d-493c-8e86-2329b97c2cbb",
      date: "YYYY-MM-DD",
      companyUuid: "123e4567-b7b6-49ff-ad51-2329b561f55b",
      status: "Work Order",
      paymentDate: "2025-08-01 12:00:00",
      paymentActionedByUuid: "123e4567-a51f-4a39-8bd6-2329b4cbb36b",
      categoryUuid: "123e4567-157a-4633-aa01-2329bcfe936b",
      invoiceSentStamp: "2025-08-01 12:00:00",
      queueUuid: "123e4567-c023-4f9b-ac5d-2329b5a96d8b",
      queueExpiryDate: "2025-08-01 12:00:00",
      queueAssignedStaffUuid: "123e4567-8763-44e4-b40b-2329b699b8ab",
      quoteDate: "2025-08-01 12:00:00",
      quoteSentStamp: "2025-08-01 12:00:00",
      workOrderDate: "2025-08-01 12:00:00",
      uuid: "123e4567-90a9-43c5-8676-2329b648021b",
      paymentProcessedStamp: "2025-08-01 12:00:00",
      paymentReceivedStamp: "2025-08-01 12:00:00",
      completionDate: "2025-08-01 12:00:00",
      completionActionedByUuid: "123e4567-fc4e-42d1-aa87-2329b8d4a80b",
      unsuccessfulDate: "2025-08-01 12:00:00",
      jobIsScheduledUntilStamp: "2025-08-01 12:00:00",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsUpdateJobs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateJobsRequest](../../models/operations/updatejobsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteJobs


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_jobs**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteJobs" method="delete" path="/job/{uuid}.json" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.deleteJobs({
    uuid: "27a28378-8b49-429f-8eea-6ad387310fd9",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobsDeleteJobs } from "servicem8/funcs/jobsDeleteJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await jobsDeleteJobs(serviceM8, {
    uuid: "27a28378-8b49-429f-8eea-6ad387310fd9",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsDeleteJobs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteJobsRequest](../../models/operations/deletejobsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
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

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.listJobs();

  // Handle the result
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
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobsListJobs(serviceM8);

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

**Promise\<[operations.ListJobsResponse](../../models/operations/listjobsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createJobs


			
#### OAuth Scope
This endpoint requires the following OAuth scope **create_jobs**.

			
			
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
  const result = await serviceM8.jobs.createJobs({
    uuid: "123e4567-9443-40f8-a097-22b4d1d047fb",
    createdByStaffUuid: "123e4567-a308-44ce-a0e1-22b4d0829b3b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-db1c-45f1-b8d3-22b4d70ec70b",
    status: "<value>",
    paymentDate: "YYYY-MM-DD HH:MM:SS",
    paymentActionedByUuid: "123e4567-79d7-4031-8216-22b4d90caa2b",
    categoryUuid: "123e4567-1e98-4f7e-b691-22b4d501e20b",
    invoiceSentStamp: "YYYY-MM-DD HH:MM:SS",
    readyToInvoiceStamp: "YYYY-MM-DD HH:MM:SS",
    paymentProcessedStamp: "YYYY-MM-DD HH:MM:SS",
    queueUuid: "123e4567-4eca-4c40-ae6d-22b4d3576c7b",
    queueExpiryDate: "YYYY-MM-DD HH:MM:SS",
    queueAssignedStaffUuid: "123e4567-b6b5-4aee-9f2e-22b4d13f676b",
    paymentReceivedStamp: "YYYY-MM-DD HH:MM:SS",
    quoteDate: "YYYY-MM-DD HH:MM:SS",
    quoteSentStamp: "YYYY-MM-DD HH:MM:SS",
    workOrderDate: "YYYY-MM-DD HH:MM:SS",
    completionDate: "YYYY-MM-DD HH:MM:SS",
    completionActionedByUuid: "123e4567-ced8-4c56-90ff-22b4deca2cdb",
    unsuccessfulDate: "YYYY-MM-DD HH:MM:SS",
    jobIsScheduledUntilStamp: "YYYY-MM-DD HH:MM:SS",
    activeNetworkRequestUuid: "123e4567-bf1f-4806-b2ac-22b4d33ee99b",
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
import { jobsCreateJobs } from "servicem8/funcs/jobsCreateJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobsCreateJobs(serviceM8, {
    uuid: "123e4567-9443-40f8-a097-22b4d1d047fb",
    createdByStaffUuid: "123e4567-a308-44ce-a0e1-22b4d0829b3b",
    date: "YYYY-MM-DD",
    companyUuid: "123e4567-db1c-45f1-b8d3-22b4d70ec70b",
    status: "<value>",
    paymentDate: "YYYY-MM-DD HH:MM:SS",
    paymentActionedByUuid: "123e4567-79d7-4031-8216-22b4d90caa2b",
    categoryUuid: "123e4567-1e98-4f7e-b691-22b4d501e20b",
    invoiceSentStamp: "YYYY-MM-DD HH:MM:SS",
    readyToInvoiceStamp: "YYYY-MM-DD HH:MM:SS",
    paymentProcessedStamp: "YYYY-MM-DD HH:MM:SS",
    queueUuid: "123e4567-4eca-4c40-ae6d-22b4d3576c7b",
    queueExpiryDate: "YYYY-MM-DD HH:MM:SS",
    queueAssignedStaffUuid: "123e4567-b6b5-4aee-9f2e-22b4d13f676b",
    paymentReceivedStamp: "YYYY-MM-DD HH:MM:SS",
    quoteDate: "YYYY-MM-DD HH:MM:SS",
    quoteSentStamp: "YYYY-MM-DD HH:MM:SS",
    workOrderDate: "YYYY-MM-DD HH:MM:SS",
    completionDate: "YYYY-MM-DD HH:MM:SS",
    completionActionedByUuid: "123e4567-ced8-4c56-90ff-22b4deca2cdb",
    unsuccessfulDate: "YYYY-MM-DD HH:MM:SS",
    jobIsScheduledUntilStamp: "YYYY-MM-DD HH:MM:SS",
    activeNetworkRequestUuid: "123e4567-bf1f-4806-b2ac-22b4d33ee99b",
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
| `request`                                                                                                                                                                      | [components.JobInput](../../models/components/jobinput.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobsResponse](../../models/operations/createjobsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getJobs


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_jobs**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.getJobs({
    uuid: "e03231ef-9c59-48f0-8dc1-2a1c0a2ec3b8",
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
import { jobsGetJobs } from "servicem8/funcs/jobsGetJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobsGetJobs(serviceM8, {
    uuid: "e03231ef-9c59-48f0-8dc1-2a1c0a2ec3b8",
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
| `request`                                                                                                                                                                      | [operations.GetJobsRequest](../../models/operations/getjobsrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetJobsResponse](../../models/operations/getjobsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateJobs


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_jobs**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.updateJobs({
    uuid: "4f33e04f-a386-479f-8e76-bf95913d83ac",
    job: {
      uuid: "123e4567-9443-40f8-a097-22b4d1d047fb",
      createdByStaffUuid: "123e4567-a308-44ce-a0e1-22b4d0829b3b",
      date: "YYYY-MM-DD",
      companyUuid: "123e4567-db1c-45f1-b8d3-22b4d70ec70b",
      status: "<value>",
      paymentDate: "YYYY-MM-DD HH:MM:SS",
      paymentActionedByUuid: "123e4567-79d7-4031-8216-22b4d90caa2b",
      categoryUuid: "123e4567-1e98-4f7e-b691-22b4d501e20b",
      invoiceSentStamp: "YYYY-MM-DD HH:MM:SS",
      readyToInvoiceStamp: "YYYY-MM-DD HH:MM:SS",
      paymentProcessedStamp: "YYYY-MM-DD HH:MM:SS",
      queueUuid: "123e4567-4eca-4c40-ae6d-22b4d3576c7b",
      queueExpiryDate: "YYYY-MM-DD HH:MM:SS",
      queueAssignedStaffUuid: "123e4567-b6b5-4aee-9f2e-22b4d13f676b",
      paymentReceivedStamp: "YYYY-MM-DD HH:MM:SS",
      quoteDate: "YYYY-MM-DD HH:MM:SS",
      quoteSentStamp: "YYYY-MM-DD HH:MM:SS",
      workOrderDate: "YYYY-MM-DD HH:MM:SS",
      completionDate: "YYYY-MM-DD HH:MM:SS",
      completionActionedByUuid: "123e4567-ced8-4c56-90ff-22b4deca2cdb",
      unsuccessfulDate: "YYYY-MM-DD HH:MM:SS",
      jobIsScheduledUntilStamp: "YYYY-MM-DD HH:MM:SS",
      activeNetworkRequestUuid: "123e4567-bf1f-4806-b2ac-22b4d33ee99b",
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
import { jobsUpdateJobs } from "servicem8/funcs/jobsUpdateJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobsUpdateJobs(serviceM8, {
    uuid: "4f33e04f-a386-479f-8e76-bf95913d83ac",
    job: {
      uuid: "123e4567-9443-40f8-a097-22b4d1d047fb",
      createdByStaffUuid: "123e4567-a308-44ce-a0e1-22b4d0829b3b",
      date: "YYYY-MM-DD",
      companyUuid: "123e4567-db1c-45f1-b8d3-22b4d70ec70b",
      status: "<value>",
      paymentDate: "YYYY-MM-DD HH:MM:SS",
      paymentActionedByUuid: "123e4567-79d7-4031-8216-22b4d90caa2b",
      categoryUuid: "123e4567-1e98-4f7e-b691-22b4d501e20b",
      invoiceSentStamp: "YYYY-MM-DD HH:MM:SS",
      readyToInvoiceStamp: "YYYY-MM-DD HH:MM:SS",
      paymentProcessedStamp: "YYYY-MM-DD HH:MM:SS",
      queueUuid: "123e4567-4eca-4c40-ae6d-22b4d3576c7b",
      queueExpiryDate: "YYYY-MM-DD HH:MM:SS",
      queueAssignedStaffUuid: "123e4567-b6b5-4aee-9f2e-22b4d13f676b",
      paymentReceivedStamp: "YYYY-MM-DD HH:MM:SS",
      quoteDate: "YYYY-MM-DD HH:MM:SS",
      quoteSentStamp: "YYYY-MM-DD HH:MM:SS",
      workOrderDate: "YYYY-MM-DD HH:MM:SS",
      completionDate: "YYYY-MM-DD HH:MM:SS",
      completionActionedByUuid: "123e4567-ced8-4c56-90ff-22b4deca2cdb",
      unsuccessfulDate: "YYYY-MM-DD HH:MM:SS",
      jobIsScheduledUntilStamp: "YYYY-MM-DD HH:MM:SS",
      activeNetworkRequestUuid: "123e4567-bf1f-4806-b2ac-22b4d33ee99b",
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
| `request`                                                                                                                                                                      | [operations.UpdateJobsRequest](../../models/operations/updatejobsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateJobsResponse](../../models/operations/updatejobsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteJobs


			
In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_jobs**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobs.deleteJobs({
    uuid: "485f3e02-d99b-43c9-9f25-d27243291361",
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
import { jobsDeleteJobs } from "servicem8/funcs/jobsDeleteJobs.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await jobsDeleteJobs(serviceM8, {
    uuid: "485f3e02-d99b-43c9-9f25-d27243291361",
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
| `request`                                                                                                                                                                      | [operations.DeleteJobsRequest](../../models/operations/deletejobsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteJobsResponse](../../models/operations/deletejobsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
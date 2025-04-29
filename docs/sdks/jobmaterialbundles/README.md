# JobMaterialBundles
(*jobMaterialBundles*)

## Overview

Operations related to Job Material Bundles

### Available Operations

* [listJobMaterialBundles](#listjobmaterialbundles) - List all Job Material Bundles
* [createJobMaterialBundles](#createjobmaterialbundles) - Create a new Job Material Bundle
* [getJobMaterialBundles](#getjobmaterialbundles) - Retrieve a Job Material Bundle
* [updateJobMaterialBundles](#updatejobmaterialbundles) - Update a Job Material Bundle
* [deleteJobMaterialBundles](#deletejobmaterialbundles) - Delete a Job Material Bundle

## listJobMaterialBundles


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterialBundles.listJobMaterialBundles();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { jobMaterialBundlesListJobMaterialBundles } from "servicem8/funcs/jobMaterialBundlesListJobMaterialBundles.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialBundlesListJobMaterialBundles(serviceM8);

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

**Promise\<[operations.ListJobMaterialBundlesResponse](../../models/operations/listjobmaterialbundlesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createJobMaterialBundles


			
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
  const result = await serviceM8.jobMaterialBundles.createJobMaterialBundles({
    uuid: "123e4567-3de1-4e96-b98f-22b4dcb5161b",
    materialBundleUuid: "123e4567-582b-4410-854d-22b4db23321b",
    jobUuid: "123e4567-b723-4245-875a-22b4d0fe962b",
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
import { jobMaterialBundlesCreateJobMaterialBundles } from "servicem8/funcs/jobMaterialBundlesCreateJobMaterialBundles.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialBundlesCreateJobMaterialBundles(serviceM8, {
    uuid: "123e4567-3de1-4e96-b98f-22b4dcb5161b",
    materialBundleUuid: "123e4567-582b-4410-854d-22b4db23321b",
    jobUuid: "123e4567-b723-4245-875a-22b4d0fe962b",
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
| `request`                                                                                                                                                                      | [components.JobMaterialBundleInput](../../models/components/jobmaterialbundleinput.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobMaterialBundlesResponse](../../models/operations/createjobmaterialbundlesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getJobMaterialBundles

Retrieve a Job Material Bundle

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterialBundles.getJobMaterialBundles({
    uuid: "a1bdb9d6-9b4c-469e-bcbd-b107a1c475b9",
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
import { jobMaterialBundlesGetJobMaterialBundles } from "servicem8/funcs/jobMaterialBundlesGetJobMaterialBundles.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialBundlesGetJobMaterialBundles(serviceM8, {
    uuid: "a1bdb9d6-9b4c-469e-bcbd-b107a1c475b9",
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
| `request`                                                                                                                                                                      | [operations.GetJobMaterialBundlesRequest](../../models/operations/getjobmaterialbundlesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetJobMaterialBundlesResponse](../../models/operations/getjobmaterialbundlesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateJobMaterialBundles

Update a Job Material Bundle

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterialBundles.updateJobMaterialBundles({
    uuid: "f4334f5f-e9f1-4143-8254-72dc0262645a",
    jobMaterialBundle: {
      uuid: "123e4567-3de1-4e96-b98f-22b4dcb5161b",
      materialBundleUuid: "123e4567-582b-4410-854d-22b4db23321b",
      jobUuid: "123e4567-b723-4245-875a-22b4d0fe962b",
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
import { jobMaterialBundlesUpdateJobMaterialBundles } from "servicem8/funcs/jobMaterialBundlesUpdateJobMaterialBundles.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialBundlesUpdateJobMaterialBundles(serviceM8, {
    uuid: "f4334f5f-e9f1-4143-8254-72dc0262645a",
    jobMaterialBundle: {
      uuid: "123e4567-3de1-4e96-b98f-22b4dcb5161b",
      materialBundleUuid: "123e4567-582b-4410-854d-22b4db23321b",
      jobUuid: "123e4567-b723-4245-875a-22b4d0fe962b",
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
| `request`                                                                                                                                                                      | [operations.UpdateJobMaterialBundlesRequest](../../models/operations/updatejobmaterialbundlesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateJobMaterialBundlesResponse](../../models/operations/updatejobmaterialbundlesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteJobMaterialBundles


			
In ServiceM8, records are never deleted, but are archived. Archived records will remain accessible via the API as (active = 0), however will no longer be visible in UI. Archived records can be restored to active by setting the record active field to 1.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobMaterialBundles.deleteJobMaterialBundles({
    uuid: "9441ddfb-9767-471b-b858-ec2ce127451a",
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
import { jobMaterialBundlesDeleteJobMaterialBundles } from "servicem8/funcs/jobMaterialBundlesDeleteJobMaterialBundles.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await jobMaterialBundlesDeleteJobMaterialBundles(serviceM8, {
    uuid: "9441ddfb-9767-471b-b858-ec2ce127451a",
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
| `request`                                                                                                                                                                      | [operations.DeleteJobMaterialBundlesRequest](../../models/operations/deletejobmaterialbundlesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteJobMaterialBundlesResponse](../../models/operations/deletejobmaterialbundlesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
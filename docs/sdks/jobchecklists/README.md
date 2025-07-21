# JobChecklists
(*jobChecklists*)

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
			

### Example Usage

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

**Promise\<[operations.ListJobChecklistsResponse](../../models/operations/listjobchecklistsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createJobChecklists


			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.jobChecklists.createJobChecklists({
    uuid: "123e4567-0ecb-4897-841a-2306f101f27b",
    jobUuid: "123e4567-90bf-401a-965f-2306f9bbd4bb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-06d8-4a8b-8d1d-2306f6e77beb",
    completedDuringCheckinUuid: "123e4567-1008-40b3-b7a5-2306f175bc8b",
    regardingObjectUuid: "123e4567-071a-421b-be6c-2306fc76f30b",
    fulfilledByObjectUuid: "123e4567-2c5b-4bd0-b82d-2306ff816b6b",
    assignedToStaffUuids: [
      "123e4567-9def-4150-b463-2306fc2bb95b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-e1d1-4ed5-afd9-2306f8e7512b",
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
    uuid: "123e4567-0ecb-4897-841a-2306f101f27b",
    jobUuid: "123e4567-90bf-401a-965f-2306f9bbd4bb",
    completedTimestamp: "2025-07-01 12:00:00",
    completedByStaffUuid: "123e4567-06d8-4a8b-8d1d-2306f6e77beb",
    completedDuringCheckinUuid: "123e4567-1008-40b3-b7a5-2306f175bc8b",
    regardingObjectUuid: "123e4567-071a-421b-be6c-2306fc76f30b",
    fulfilledByObjectUuid: "123e4567-2c5b-4bd0-b82d-2306ff816b6b",
    assignedToStaffUuids: [
      "123e4567-9def-4150-b463-2306fc2bb95b",
    ],
    assignedTimestamp: "2025-07-01 12:00:00",
    assignedByStaffUuid: "123e4567-e1d1-4ed5-afd9-2306f8e7512b",
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
| `request`                                                                                                                                                                      | [components.JobChecklistInput](../../models/components/jobchecklistinput.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateJobChecklistsResponse](../../models/operations/createjobchecklistsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getJobChecklists

Retrieve a Job Checklist

### Example Usage

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

**Promise\<[operations.GetJobChecklistsResponse](../../models/operations/getjobchecklistsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateJobChecklists

Update a Job Checklist

### Example Usage

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
    jobChecklist: {
      uuid: "123e4567-0ecb-4897-841a-2306f101f27b",
      jobUuid: "123e4567-90bf-401a-965f-2306f9bbd4bb",
      completedTimestamp: "2025-07-01 12:00:00",
      completedByStaffUuid: "123e4567-06d8-4a8b-8d1d-2306f6e77beb",
      completedDuringCheckinUuid: "123e4567-1008-40b3-b7a5-2306f175bc8b",
      regardingObjectUuid: "123e4567-071a-421b-be6c-2306fc76f30b",
      fulfilledByObjectUuid: "123e4567-2c5b-4bd0-b82d-2306ff816b6b",
      assignedToStaffUuids: [
        "123e4567-9def-4150-b463-2306fc2bb95b",
      ],
      assignedTimestamp: "2025-07-01 12:00:00",
      assignedByStaffUuid: "123e4567-e1d1-4ed5-afd9-2306f8e7512b",
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
    jobChecklist: {
      uuid: "123e4567-0ecb-4897-841a-2306f101f27b",
      jobUuid: "123e4567-90bf-401a-965f-2306f9bbd4bb",
      completedTimestamp: "2025-07-01 12:00:00",
      completedByStaffUuid: "123e4567-06d8-4a8b-8d1d-2306f6e77beb",
      completedDuringCheckinUuid: "123e4567-1008-40b3-b7a5-2306f175bc8b",
      regardingObjectUuid: "123e4567-071a-421b-be6c-2306fc76f30b",
      fulfilledByObjectUuid: "123e4567-2c5b-4bd0-b82d-2306ff816b6b",
      assignedToStaffUuids: [
        "123e4567-9def-4150-b463-2306fc2bb95b",
      ],
      assignedTimestamp: "2025-07-01 12:00:00",
      assignedByStaffUuid: "123e4567-e1d1-4ed5-afd9-2306f8e7512b",
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

**Promise\<[operations.UpdateJobChecklistsResponse](../../models/operations/updatejobchecklistsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteJobChecklists


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			

### Example Usage

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

**Promise\<[operations.DeleteJobChecklistsResponse](../../models/operations/deletejobchecklistsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
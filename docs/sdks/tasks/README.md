# Tasks
(*tasks*)

## Overview

Operations related to Tasks

### Available Operations

* [listTasks](#listtasks) - List all Tasks
* [createTasks](#createtasks) - Create a new Task
* [getTasks](#gettasks) - Retrieve a Task
* [updateTasks](#updatetasks) - Update a Task
* [deleteTasks](#deletetasks) - Delete a Task

## listTasks


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_tasks**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.tasks.listTasks();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { tasksListTasks } from "servicem8/funcs/tasksListTasks.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tasksListTasks(serviceM8);

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

**Promise\<[operations.ListTasksResponse](../../models/operations/listtasksresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createTasks


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_tasks**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.tasks.createTasks({
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ea7a-418d-8bc7-22b4d6f88e8b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-1596-433b-8657-22b4d1913aab",
    assignedToStaffUuid: "123e4567-299b-4b50-b21f-22b4d1057ebb",
    uuid: "123e4567-a72d-4a44-883e-22b4dc3e260b",
    createdByStaffUuid: "123e4567-dd10-49af-ba90-22b4d80f729b",
    createDate: "YYYY-MM-DD HH:MM:SS",
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
import { tasksCreateTasks } from "servicem8/funcs/tasksCreateTasks.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tasksCreateTasks(serviceM8, {
    dueDate: "YYYY-MM-DD",
    name: "<value>",
    relatedObjectUuid: "123e4567-ea7a-418d-8bc7-22b4d6f88e8b",
    completedTimestamp: "YYYY-MM-DD HH:MM:SS",
    completedByStaffUuid: "123e4567-1596-433b-8657-22b4d1913aab",
    assignedToStaffUuid: "123e4567-299b-4b50-b21f-22b4d1057ebb",
    uuid: "123e4567-a72d-4a44-883e-22b4dc3e260b",
    createdByStaffUuid: "123e4567-dd10-49af-ba90-22b4d80f729b",
    createDate: "YYYY-MM-DD HH:MM:SS",
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
| `request`                                                                                                                                                                      | [components.TaskInput](../../models/components/taskinput.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTasksResponse](../../models/operations/createtasksresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getTasks


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_tasks**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.tasks.getTasks({
    uuid: "89513748-b917-4807-944b-430445ee8621",
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
import { tasksGetTasks } from "servicem8/funcs/tasksGetTasks.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tasksGetTasks(serviceM8, {
    uuid: "89513748-b917-4807-944b-430445ee8621",
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
| `request`                                                                                                                                                                      | [operations.GetTasksRequest](../../models/operations/gettasksrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTasksResponse](../../models/operations/gettasksresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateTasks


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_tasks**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.tasks.updateTasks({
    uuid: "63b2819d-65b6-4785-8dec-6cc2953e2c97",
    task: {
      dueDate: "YYYY-MM-DD",
      name: "<value>",
      relatedObjectUuid: "123e4567-ea7a-418d-8bc7-22b4d6f88e8b",
      completedTimestamp: "YYYY-MM-DD HH:MM:SS",
      completedByStaffUuid: "123e4567-1596-433b-8657-22b4d1913aab",
      assignedToStaffUuid: "123e4567-299b-4b50-b21f-22b4d1057ebb",
      uuid: "123e4567-a72d-4a44-883e-22b4dc3e260b",
      createdByStaffUuid: "123e4567-dd10-49af-ba90-22b4d80f729b",
      createDate: "YYYY-MM-DD HH:MM:SS",
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
import { tasksUpdateTasks } from "servicem8/funcs/tasksUpdateTasks.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tasksUpdateTasks(serviceM8, {
    uuid: "63b2819d-65b6-4785-8dec-6cc2953e2c97",
    task: {
      dueDate: "YYYY-MM-DD",
      name: "<value>",
      relatedObjectUuid: "123e4567-ea7a-418d-8bc7-22b4d6f88e8b",
      completedTimestamp: "YYYY-MM-DD HH:MM:SS",
      completedByStaffUuid: "123e4567-1596-433b-8657-22b4d1913aab",
      assignedToStaffUuid: "123e4567-299b-4b50-b21f-22b4d1057ebb",
      uuid: "123e4567-a72d-4a44-883e-22b4dc3e260b",
      createdByStaffUuid: "123e4567-dd10-49af-ba90-22b4d80f729b",
      createDate: "YYYY-MM-DD HH:MM:SS",
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
| `request`                                                                                                                                                                      | [operations.UpdateTasksRequest](../../models/operations/updatetasksrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTasksResponse](../../models/operations/updatetasksresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteTasks


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_tasks**.

			

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.tasks.deleteTasks({
    uuid: "b2f94108-940f-438b-b838-58e70df1ddb2",
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
import { tasksDeleteTasks } from "servicem8/funcs/tasksDeleteTasks.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tasksDeleteTasks(serviceM8, {
    uuid: "b2f94108-940f-438b-b838-58e70df1ddb2",
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
| `request`                                                                                                                                                                      | [operations.DeleteTasksRequest](../../models/operations/deletetasksrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteTasksResponse](../../models/operations/deletetasksresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
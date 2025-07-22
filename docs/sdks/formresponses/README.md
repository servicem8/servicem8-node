# FormResponses
(*formResponses*)

## Overview

Operations related to Form Responses

### Available Operations

* [listFormResponses](#listformresponses) - List all Form Responses
* [createFormResponses](#createformresponses) - Create a new Form Response
* [getFormResponses](#getformresponses) - Retrieve a Form Response
* [updateFormResponses](#updateformresponses) - Update a Form Response
* [deleteFormResponses](#deleteformresponses) - Delete a Form Response

## listFormResponses


			
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
  const result = await serviceM8.formResponses.listFormResponses();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { formResponsesListFormResponses } from "servicem8/funcs/formResponsesListFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await formResponsesListFormResponses(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formResponsesListFormResponses failed:", res.error);
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

**Promise\<[operations.ListFormResponsesResponse](../../models/operations/listformresponsesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createFormResponses


			
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
  const result = await serviceM8.formResponses.createFormResponses({
    uuid: "123e4567-e9b4-42b3-b4f4-2308e8f73f8b",
    formUuid: "123e4567-9737-4041-83df-2308e25423fb",
    staffUuid: "123e4567-7796-48a2-8115-2308e2603bdb",
    regardingObjectUuid: "123e4567-9a66-4275-b49a-2308eda5e52b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-e048-4e13-96d8-2308e0762b7b",
    documentAttachmentUuid: "123e4567-6325-4009-98ef-2308e45a7d3b",
    assetUuid: "123e4567-9c73-437a-82ea-2308e904267b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { formResponsesCreateFormResponses } from "servicem8/funcs/formResponsesCreateFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await formResponsesCreateFormResponses(serviceM8, {
    uuid: "123e4567-e9b4-42b3-b4f4-2308e8f73f8b",
    formUuid: "123e4567-9737-4041-83df-2308e25423fb",
    staffUuid: "123e4567-7796-48a2-8115-2308e2603bdb",
    regardingObjectUuid: "123e4567-9a66-4275-b49a-2308eda5e52b",
    timestamp: "2025-07-01 12:00:00",
    formByStaffUuid: "123e4567-e048-4e13-96d8-2308e0762b7b",
    documentAttachmentUuid: "123e4567-6325-4009-98ef-2308e45a7d3b",
    assetUuid: "123e4567-9c73-437a-82ea-2308e904267b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formResponsesCreateFormResponses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.FormResponseInput](../../models/components/formresponseinput.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateFormResponsesResponse](../../models/operations/createformresponsesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getFormResponses

Retrieve a Form Response

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.formResponses.getFormResponses({
    uuid: "63cee341-62a5-4e5b-9f51-caacc962fe3f",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { formResponsesGetFormResponses } from "servicem8/funcs/formResponsesGetFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await formResponsesGetFormResponses(serviceM8, {
    uuid: "63cee341-62a5-4e5b-9f51-caacc962fe3f",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formResponsesGetFormResponses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFormResponsesRequest](../../models/operations/getformresponsesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetFormResponsesResponse](../../models/operations/getformresponsesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateFormResponses

Update a Form Response

### Example Usage

```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.formResponses.updateFormResponses({
    uuid: "5f593a3c-772d-4259-856d-86a8df7ae53d",
    formResponse: {
      uuid: "123e4567-e9b4-42b3-b4f4-2308e8f73f8b",
      formUuid: "123e4567-9737-4041-83df-2308e25423fb",
      staffUuid: "123e4567-7796-48a2-8115-2308e2603bdb",
      regardingObjectUuid: "123e4567-9a66-4275-b49a-2308eda5e52b",
      timestamp: "2025-07-01 12:00:00",
      formByStaffUuid: "123e4567-e048-4e13-96d8-2308e0762b7b",
      documentAttachmentUuid: "123e4567-6325-4009-98ef-2308e45a7d3b",
      assetUuid: "123e4567-9c73-437a-82ea-2308e904267b",
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
import { formResponsesUpdateFormResponses } from "servicem8/funcs/formResponsesUpdateFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await formResponsesUpdateFormResponses(serviceM8, {
    uuid: "5f593a3c-772d-4259-856d-86a8df7ae53d",
    formResponse: {
      uuid: "123e4567-e9b4-42b3-b4f4-2308e8f73f8b",
      formUuid: "123e4567-9737-4041-83df-2308e25423fb",
      staffUuid: "123e4567-7796-48a2-8115-2308e2603bdb",
      regardingObjectUuid: "123e4567-9a66-4275-b49a-2308eda5e52b",
      timestamp: "2025-07-01 12:00:00",
      formByStaffUuid: "123e4567-e048-4e13-96d8-2308e0762b7b",
      documentAttachmentUuid: "123e4567-6325-4009-98ef-2308e45a7d3b",
      assetUuid: "123e4567-9c73-437a-82ea-2308e904267b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formResponsesUpdateFormResponses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateFormResponsesRequest](../../models/operations/updateformresponsesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateFormResponsesResponse](../../models/operations/updateformresponsesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteFormResponses


			
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
  const result = await serviceM8.formResponses.deleteFormResponses({
    uuid: "e983658f-a3da-4850-8bb2-90c7866b30cf",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { formResponsesDeleteFormResponses } from "servicem8/funcs/formResponsesDeleteFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await formResponsesDeleteFormResponses(serviceM8, {
    uuid: "e983658f-a3da-4850-8bb2-90c7866b30cf",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("formResponsesDeleteFormResponses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFormResponsesRequest](../../models/operations/deleteformresponsesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteFormResponsesResponse](../../models/operations/deleteformresponsesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |
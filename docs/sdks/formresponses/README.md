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

const serviceM8 = new ServiceM8();

async function run() {
  const result = await serviceM8.formResponses.listFormResponses({
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
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
import { formResponsesListFormResponses } from "servicem8/funcs/formResponsesListFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core();

async function run() {
  const res = await formResponsesListFormResponses(serviceM8, {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
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
| `security`                                                                                                                                                                     | [operations.ListFormResponsesSecurity](../../models/operations/listformresponsessecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

const serviceM8 = new ServiceM8();

async function run() {
  const result = await serviceM8.formResponses.createFormResponses({
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "123e4567-31e2-4a09-b726-22b4ddf69b3b",
    formUuid: "123e4567-3f17-486e-9edc-22b4dac0621b",
    staffUuid: "123e4567-e65c-4a61-8020-22b4da53c35b",
    regardingObjectUuid: "123e4567-b9c0-42d6-8c86-22b4dbfdf4db",
    timestamp: "YYYY-MM-DD HH:MM:SS",
    formByStaffUuid: "123e4567-434d-4964-9543-22b4d6d200eb",
    documentAttachmentUuid: "123e4567-9b9d-43c0-966b-22b4d9e25bfb",
    assetUuid: "123e4567-711c-4c33-9b16-22b4d62752fb",
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
import { formResponsesCreateFormResponses } from "servicem8/funcs/formResponsesCreateFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core();

async function run() {
  const res = await formResponsesCreateFormResponses(serviceM8, {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "123e4567-31e2-4a09-b726-22b4ddf69b3b",
    formUuid: "123e4567-3f17-486e-9edc-22b4dac0621b",
    staffUuid: "123e4567-e65c-4a61-8020-22b4da53c35b",
    regardingObjectUuid: "123e4567-b9c0-42d6-8c86-22b4dbfdf4db",
    timestamp: "YYYY-MM-DD HH:MM:SS",
    formByStaffUuid: "123e4567-434d-4964-9543-22b4d6d200eb",
    documentAttachmentUuid: "123e4567-9b9d-43c0-966b-22b4d9e25bfb",
    assetUuid: "123e4567-711c-4c33-9b16-22b4d62752fb",
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
| `request`                                                                                                                                                                      | [components.FormResponseInput](../../models/components/formresponseinput.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateFormResponsesSecurity](../../models/operations/createformresponsessecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

const serviceM8 = new ServiceM8();

async function run() {
  const result = await serviceM8.formResponses.getFormResponses({
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "23aea6ea-cca1-4a9f-b754-cf0a7e13a1e5",
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
import { formResponsesGetFormResponses } from "servicem8/funcs/formResponsesGetFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core();

async function run() {
  const res = await formResponsesGetFormResponses(serviceM8, {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "23aea6ea-cca1-4a9f-b754-cf0a7e13a1e5",
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
| `request`                                                                                                                                                                      | [operations.GetFormResponsesRequest](../../models/operations/getformresponsesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetFormResponsesSecurity](../../models/operations/getformresponsessecurity.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

const serviceM8 = new ServiceM8();

async function run() {
  const result = await serviceM8.formResponses.updateFormResponses({
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "7dcb04b7-cd57-4348-a3cc-51da433d11f8",
    formResponse: {
      uuid: "123e4567-31e2-4a09-b726-22b4ddf69b3b",
      formUuid: "123e4567-3f17-486e-9edc-22b4dac0621b",
      staffUuid: "123e4567-e65c-4a61-8020-22b4da53c35b",
      regardingObjectUuid: "123e4567-b9c0-42d6-8c86-22b4dbfdf4db",
      timestamp: "YYYY-MM-DD HH:MM:SS",
      formByStaffUuid: "123e4567-434d-4964-9543-22b4d6d200eb",
      documentAttachmentUuid: "123e4567-9b9d-43c0-966b-22b4d9e25bfb",
      assetUuid: "123e4567-711c-4c33-9b16-22b4d62752fb",
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
import { formResponsesUpdateFormResponses } from "servicem8/funcs/formResponsesUpdateFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core();

async function run() {
  const res = await formResponsesUpdateFormResponses(serviceM8, {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "7dcb04b7-cd57-4348-a3cc-51da433d11f8",
    formResponse: {
      uuid: "123e4567-31e2-4a09-b726-22b4ddf69b3b",
      formUuid: "123e4567-3f17-486e-9edc-22b4dac0621b",
      staffUuid: "123e4567-e65c-4a61-8020-22b4da53c35b",
      regardingObjectUuid: "123e4567-b9c0-42d6-8c86-22b4dbfdf4db",
      timestamp: "YYYY-MM-DD HH:MM:SS",
      formByStaffUuid: "123e4567-434d-4964-9543-22b4d6d200eb",
      documentAttachmentUuid: "123e4567-9b9d-43c0-966b-22b4d9e25bfb",
      assetUuid: "123e4567-711c-4c33-9b16-22b4d62752fb",
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
| `request`                                                                                                                                                                      | [operations.UpdateFormResponsesRequest](../../models/operations/updateformresponsesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateFormResponsesSecurity](../../models/operations/updateformresponsessecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

const serviceM8 = new ServiceM8();

async function run() {
  const result = await serviceM8.formResponses.deleteFormResponses({
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "5f481342-bcc0-451e-8443-dfd912447848",
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
import { formResponsesDeleteFormResponses } from "servicem8/funcs/formResponsesDeleteFormResponses.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core();

async function run() {
  const res = await formResponsesDeleteFormResponses(serviceM8, {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  }, {
    uuid: "5f481342-bcc0-451e-8443-dfd912447848",
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
| `request`                                                                                                                                                                      | [operations.DeleteFormResponsesRequest](../../models/operations/deleteformresponsesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteFormResponsesSecurity](../../models/operations/deleteformresponsessecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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
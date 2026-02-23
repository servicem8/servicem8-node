# Feedback

## Overview

Operations related to Feedback

### Available Operations

* [listFeedback](#listfeedback) - List all Feedback
* [createFeedback](#createfeedback) - Create a new Feedback
* [getFeedback](#getfeedback) - Retrieve a Feedback
* [updateFeedback](#updatefeedback) - Update a Feedback
* [deleteFeedback](#deletefeedback) - Delete a Feedback

## listFeedback


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_feedback**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listFeedback" method="get" path="/feedback.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.listFeedback();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackListFeedback } from "servicem8/funcs/feedbackListFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackListFeedback(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackListFeedback failed:", res.error);
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

**Promise\<[components.Feedback[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createFeedback


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_feedback**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="createFeedback" method="post" path="/feedback.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.createFeedback({
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackCreateFeedback } from "servicem8/funcs/feedbackCreateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackCreateFeedback(serviceM8, {
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackCreateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="createFeedback" method="post" path="/feedback.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.createFeedback({
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackCreateFeedback } from "servicem8/funcs/feedbackCreateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackCreateFeedback(serviceM8, {
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackCreateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="createFeedback" method="post" path="/feedback.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.createFeedback({
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackCreateFeedback } from "servicem8/funcs/feedbackCreateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackCreateFeedback(serviceM8, {
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackCreateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="createFeedback" method="post" path="/feedback.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.createFeedback({
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackCreateFeedback } from "servicem8/funcs/feedbackCreateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackCreateFeedback(serviceM8, {
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackCreateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="createFeedback" method="post" path="/feedback.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.createFeedback({
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackCreateFeedback } from "servicem8/funcs/feedbackCreateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackCreateFeedback(serviceM8, {
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackCreateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="createFeedback" method="post" path="/feedback.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.createFeedback({
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackCreateFeedback } from "servicem8/funcs/feedbackCreateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackCreateFeedback(serviceM8, {
    relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
    uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackCreateFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.FeedbackCreate](../../models/components/feedbackcreate.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateFeedbackResponse](../../models/operations/createfeedbackresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getFeedback


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_feedback**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFeedback" method="get" path="/feedback/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.getFeedback({
    uuid: "b6ddae86-77cc-4bf6-a38b-8ad53cefc915",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackGetFeedback } from "servicem8/funcs/feedbackGetFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackGetFeedback(serviceM8, {
    uuid: "b6ddae86-77cc-4bf6-a38b-8ad53cefc915",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackGetFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFeedbackRequest](../../models/operations/getfeedbackrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Feedback](../../models/components/feedback.md)\>**

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

## updateFeedback


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_feedback**.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="post" path="/feedback/{uuid}.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.updateFeedback({
    uuid: "777086b6-20a1-4ef9-b306-874fd4dd014b",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
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
import { feedbackUpdateFeedback } from "servicem8/funcs/feedbackUpdateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackUpdateFeedback(serviceM8, {
    uuid: "777086b6-20a1-4ef9-b306-874fd4dd014b",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="post" path="/feedback/{uuid}.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.updateFeedback({
    uuid: "777086b6-20a1-4ef9-b306-874fd4dd014b",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
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
import { feedbackUpdateFeedback } from "servicem8/funcs/feedbackUpdateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackUpdateFeedback(serviceM8, {
    uuid: "777086b6-20a1-4ef9-b306-874fd4dd014b",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="post" path="/feedback/{uuid}.json" example="notFound" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.updateFeedback({
    uuid: "290e94ef-7cc3-418b-8a64-ed90bc4b020d",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
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
import { feedbackUpdateFeedback } from "servicem8/funcs/feedbackUpdateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackUpdateFeedback(serviceM8, {
    uuid: "290e94ef-7cc3-418b-8a64-ed90bc4b020d",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="post" path="/feedback/{uuid}.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.updateFeedback({
    uuid: "485577d7-0155-492c-a986-9f625f0c8d71",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
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
import { feedbackUpdateFeedback } from "servicem8/funcs/feedbackUpdateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackUpdateFeedback(serviceM8, {
    uuid: "485577d7-0155-492c-a986-9f625f0c8d71",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="post" path="/feedback/{uuid}.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.updateFeedback({
    uuid: "e39bc038-a7ac-4ac0-a0c9-4324cb7d9bc6",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
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
import { feedbackUpdateFeedback } from "servicem8/funcs/feedbackUpdateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackUpdateFeedback(serviceM8, {
    uuid: "e39bc038-a7ac-4ac0-a0c9-4324cb7d9bc6",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="post" path="/feedback/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.updateFeedback({
    uuid: "4b9b8627-caa7-402a-94b0-02cb8641823c",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
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
import { feedbackUpdateFeedback } from "servicem8/funcs/feedbackUpdateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackUpdateFeedback(serviceM8, {
    uuid: "4b9b8627-caa7-402a-94b0-02cb8641823c",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="updateFeedback" method="post" path="/feedback/{uuid}.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.updateFeedback({
    uuid: "4b9b8627-caa7-402a-94b0-02cb8641823c",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
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
import { feedbackUpdateFeedback } from "servicem8/funcs/feedbackUpdateFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackUpdateFeedback(serviceM8, {
    uuid: "4b9b8627-caa7-402a-94b0-02cb8641823c",
    feedbackCreate: {
      relatedObjectUuid: "123e4567-cced-48ed-b676-23c6f4d0fe9b",
      uuid: "123e4567-ff0c-4bfd-afd8-23c6f5c4f1db",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackUpdateFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateFeedbackRequest](../../models/operations/updatefeedbackrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteFeedback


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_feedback**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteFeedback" method="delete" path="/feedback/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.feedback.deleteFeedback({
    uuid: "c65b256c-d215-438a-89da-d77ebf33ec77",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { feedbackDeleteFeedback } from "servicem8/funcs/feedbackDeleteFeedback.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await feedbackDeleteFeedback(serviceM8, {
    uuid: "c65b256c-d215-438a-89da-d77ebf33ec77",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("feedbackDeleteFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFeedbackRequest](../../models/operations/deletefeedbackrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
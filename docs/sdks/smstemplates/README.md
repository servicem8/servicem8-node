# SMSTemplates

## Overview

Operations related to SMS Templates

### Available Operations

* [listSMSTemplates](#listsmstemplates) - List all SMS Templates
* [createSMSTemplates](#createsmstemplates) - Create a new SMS Template
* [getSMSTemplates](#getsmstemplates) - Retrieve a SMS Template
* [updateSMSTemplates](#updatesmstemplates) - Update a SMS Template
* [deleteSMSTemplates](#deletesmstemplates) - Delete a SMS Template

## listSMSTemplates


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_templates**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSMSTemplates" method="get" path="/smstemplate.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.listSMSTemplates();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesListSMSTemplates } from "servicem8/funcs/smsTemplatesListSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesListSMSTemplates(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesListSMSTemplates failed:", res.error);
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

**Promise\<[components.SmsTemplate[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createSMSTemplates


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_templates**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="createSMSTemplates" method="post" path="/smstemplate.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.createSMSTemplates({
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesCreateSMSTemplates } from "servicem8/funcs/smsTemplatesCreateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesCreateSMSTemplates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesCreateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="createSMSTemplates" method="post" path="/smstemplate.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.createSMSTemplates({
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesCreateSMSTemplates } from "servicem8/funcs/smsTemplatesCreateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesCreateSMSTemplates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesCreateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="createSMSTemplates" method="post" path="/smstemplate.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.createSMSTemplates({
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesCreateSMSTemplates } from "servicem8/funcs/smsTemplatesCreateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesCreateSMSTemplates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesCreateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="createSMSTemplates" method="post" path="/smstemplate.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.createSMSTemplates({
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesCreateSMSTemplates } from "servicem8/funcs/smsTemplatesCreateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesCreateSMSTemplates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesCreateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="createSMSTemplates" method="post" path="/smstemplate.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.createSMSTemplates({
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesCreateSMSTemplates } from "servicem8/funcs/smsTemplatesCreateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesCreateSMSTemplates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesCreateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="createSMSTemplates" method="post" path="/smstemplate.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.createSMSTemplates({
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesCreateSMSTemplates } from "servicem8/funcs/smsTemplatesCreateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesCreateSMSTemplates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesCreateSMSTemplates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SmsTemplateCreate](../../models/components/smstemplatecreate.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSMSTemplatesResponse](../../models/operations/createsmstemplatesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getSMSTemplates


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_templates**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSMSTemplates" method="get" path="/smstemplate/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.getSMSTemplates({
    uuid: "e7d961f0-a541-46d1-9122-9b360d0c48f1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesGetSMSTemplates } from "servicem8/funcs/smsTemplatesGetSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesGetSMSTemplates(serviceM8, {
    uuid: "e7d961f0-a541-46d1-9122-9b360d0c48f1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesGetSMSTemplates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSMSTemplatesRequest](../../models/operations/getsmstemplatesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SmsTemplate](../../models/components/smstemplate.md)\>**

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

## updateSMSTemplates


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_templates**.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="updateSMSTemplates" method="post" path="/smstemplate/{uuid}.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.updateSMSTemplates({
    uuid: "7a3c1773-93cb-42a0-b398-7d86fe5fa7a7",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
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
import { smsTemplatesUpdateSMSTemplates } from "servicem8/funcs/smsTemplatesUpdateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesUpdateSMSTemplates(serviceM8, {
    uuid: "7a3c1773-93cb-42a0-b398-7d86fe5fa7a7",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesUpdateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="updateSMSTemplates" method="post" path="/smstemplate/{uuid}.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.updateSMSTemplates({
    uuid: "7a3c1773-93cb-42a0-b398-7d86fe5fa7a7",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
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
import { smsTemplatesUpdateSMSTemplates } from "servicem8/funcs/smsTemplatesUpdateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesUpdateSMSTemplates(serviceM8, {
    uuid: "7a3c1773-93cb-42a0-b398-7d86fe5fa7a7",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesUpdateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="updateSMSTemplates" method="post" path="/smstemplate/{uuid}.json" example="notFound" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.updateSMSTemplates({
    uuid: "5b395f1b-a649-44cd-a149-f68f77d7f7d7",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
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
import { smsTemplatesUpdateSMSTemplates } from "servicem8/funcs/smsTemplatesUpdateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesUpdateSMSTemplates(serviceM8, {
    uuid: "5b395f1b-a649-44cd-a149-f68f77d7f7d7",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesUpdateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="updateSMSTemplates" method="post" path="/smstemplate/{uuid}.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.updateSMSTemplates({
    uuid: "ad149509-4c64-4a01-9f83-702c8e50e583",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
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
import { smsTemplatesUpdateSMSTemplates } from "servicem8/funcs/smsTemplatesUpdateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesUpdateSMSTemplates(serviceM8, {
    uuid: "ad149509-4c64-4a01-9f83-702c8e50e583",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesUpdateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="updateSMSTemplates" method="post" path="/smstemplate/{uuid}.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.updateSMSTemplates({
    uuid: "bfad0287-e104-481a-856d-1fa6145c2a41",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
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
import { smsTemplatesUpdateSMSTemplates } from "servicem8/funcs/smsTemplatesUpdateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesUpdateSMSTemplates(serviceM8, {
    uuid: "bfad0287-e104-481a-856d-1fa6145c2a41",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesUpdateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="updateSMSTemplates" method="post" path="/smstemplate/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.updateSMSTemplates({
    uuid: "2ea183b5-88e4-4168-a975-1820b2711ae4",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
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
import { smsTemplatesUpdateSMSTemplates } from "servicem8/funcs/smsTemplatesUpdateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesUpdateSMSTemplates(serviceM8, {
    uuid: "2ea183b5-88e4-4168-a975-1820b2711ae4",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesUpdateSMSTemplates failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="updateSMSTemplates" method="post" path="/smstemplate/{uuid}.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.updateSMSTemplates({
    uuid: "2ea183b5-88e4-4168-a975-1820b2711ae4",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
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
import { smsTemplatesUpdateSMSTemplates } from "servicem8/funcs/smsTemplatesUpdateSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesUpdateSMSTemplates(serviceM8, {
    uuid: "2ea183b5-88e4-4168-a975-1820b2711ae4",
    smsTemplateCreate: {
      name: "<value>",
      uuid: "123e4567-cfc4-4313-ae36-23c6f490acbb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesUpdateSMSTemplates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSMSTemplatesRequest](../../models/operations/updatesmstemplatesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteSMSTemplates


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_templates**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSMSTemplates" method="delete" path="/smstemplate/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.smsTemplates.deleteSMSTemplates({
    uuid: "4329ad8c-f6fa-4361-ba83-0638b17cb240",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { smsTemplatesDeleteSMSTemplates } from "servicem8/funcs/smsTemplatesDeleteSMSTemplates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await smsTemplatesDeleteSMSTemplates(serviceM8, {
    uuid: "4329ad8c-f6fa-4361-ba83-0638b17cb240",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("smsTemplatesDeleteSMSTemplates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSMSTemplatesRequest](../../models/operations/deletesmstemplatesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
# AssetTypeFields

## Overview

Operations related to Asset Type Fields

### Available Operations

* [listAssetTypeFields](#listassettypefields) - List all Asset Type Fields
* [createAssetTypeFields](#createassettypefields) - Create a new Asset Type Field
* [getAssetTypeFields](#getassettypefields) - Retrieve an Asset Type Field
* [updateAssetTypeFields](#updateassettypefields) - Update an Asset Type Field
* [deleteAssetTypeFields](#deleteassettypefields) - Delete an Asset Type Field

## listAssetTypeFields


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_assets**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAssetTypeFields" method="get" path="/assettypefield.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.listAssetTypeFields();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsListAssetTypeFields } from "servicem8/funcs/assetTypeFieldsListAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsListAssetTypeFields(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsListAssetTypeFields failed:", res.error);
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

**Promise\<[components.AssetTypeField[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createAssetTypeFields


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_assets**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="createAssetTypeFields" method="post" path="/assettypefield.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.createAssetTypeFields({
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsCreateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsCreateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsCreateAssetTypeFields(serviceM8, {
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsCreateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="createAssetTypeFields" method="post" path="/assettypefield.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.createAssetTypeFields({
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsCreateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsCreateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsCreateAssetTypeFields(serviceM8, {
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsCreateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="createAssetTypeFields" method="post" path="/assettypefield.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.createAssetTypeFields({
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsCreateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsCreateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsCreateAssetTypeFields(serviceM8, {
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsCreateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="createAssetTypeFields" method="post" path="/assettypefield.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.createAssetTypeFields({
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsCreateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsCreateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsCreateAssetTypeFields(serviceM8, {
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsCreateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="createAssetTypeFields" method="post" path="/assettypefield.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.createAssetTypeFields({
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsCreateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsCreateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsCreateAssetTypeFields(serviceM8, {
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsCreateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="createAssetTypeFields" method="post" path="/assettypefield.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.createAssetTypeFields({
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsCreateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsCreateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsCreateAssetTypeFields(serviceM8, {
    uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsCreateAssetTypeFields failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AssetTypeFieldCreate](../../models/components/assettypefieldcreate.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateAssetTypeFieldsResponse](../../models/operations/createassettypefieldsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getAssetTypeFields


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_assets**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAssetTypeFields" method="get" path="/assettypefield/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.getAssetTypeFields({
    uuid: "aca8d173-e0f2-4517-ac45-4f4571997d2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsGetAssetTypeFields } from "servicem8/funcs/assetTypeFieldsGetAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsGetAssetTypeFields(serviceM8, {
    uuid: "aca8d173-e0f2-4517-ac45-4f4571997d2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsGetAssetTypeFields failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssetTypeFieldsRequest](../../models/operations/getassettypefieldsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AssetTypeField](../../models/components/assettypefield.md)\>**

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

## updateAssetTypeFields


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_assets**.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="updateAssetTypeFields" method="post" path="/assettypefield/{uuid}.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.updateAssetTypeFields({
    uuid: "4772083f-08d5-4724-bfb4-ffff6fb1531d",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
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
import { assetTypeFieldsUpdateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsUpdateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsUpdateAssetTypeFields(serviceM8, {
    uuid: "4772083f-08d5-4724-bfb4-ffff6fb1531d",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsUpdateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="updateAssetTypeFields" method="post" path="/assettypefield/{uuid}.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.updateAssetTypeFields({
    uuid: "4772083f-08d5-4724-bfb4-ffff6fb1531d",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
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
import { assetTypeFieldsUpdateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsUpdateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsUpdateAssetTypeFields(serviceM8, {
    uuid: "4772083f-08d5-4724-bfb4-ffff6fb1531d",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsUpdateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="updateAssetTypeFields" method="post" path="/assettypefield/{uuid}.json" example="notFound" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.updateAssetTypeFields({
    uuid: "f996c8c1-cf05-49be-adc6-a51f5f9ac890",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
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
import { assetTypeFieldsUpdateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsUpdateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsUpdateAssetTypeFields(serviceM8, {
    uuid: "f996c8c1-cf05-49be-adc6-a51f5f9ac890",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsUpdateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="updateAssetTypeFields" method="post" path="/assettypefield/{uuid}.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.updateAssetTypeFields({
    uuid: "90ed60c8-fed3-47da-99ea-0ccf3105d133",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
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
import { assetTypeFieldsUpdateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsUpdateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsUpdateAssetTypeFields(serviceM8, {
    uuid: "90ed60c8-fed3-47da-99ea-0ccf3105d133",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsUpdateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="updateAssetTypeFields" method="post" path="/assettypefield/{uuid}.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.updateAssetTypeFields({
    uuid: "03fac43a-bed7-4030-a79e-74d6e91ca860",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
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
import { assetTypeFieldsUpdateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsUpdateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsUpdateAssetTypeFields(serviceM8, {
    uuid: "03fac43a-bed7-4030-a79e-74d6e91ca860",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsUpdateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="updateAssetTypeFields" method="post" path="/assettypefield/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.updateAssetTypeFields({
    uuid: "1d8d7fd0-4d09-4955-a484-0cd4add08b25",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
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
import { assetTypeFieldsUpdateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsUpdateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsUpdateAssetTypeFields(serviceM8, {
    uuid: "1d8d7fd0-4d09-4955-a484-0cd4add08b25",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsUpdateAssetTypeFields failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="updateAssetTypeFields" method="post" path="/assettypefield/{uuid}.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.updateAssetTypeFields({
    uuid: "1d8d7fd0-4d09-4955-a484-0cd4add08b25",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
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
import { assetTypeFieldsUpdateAssetTypeFields } from "servicem8/funcs/assetTypeFieldsUpdateAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsUpdateAssetTypeFields(serviceM8, {
    uuid: "1d8d7fd0-4d09-4955-a484-0cd4add08b25",
    assetTypeFieldCreate: {
      uuid: "123e4567-9e86-4ccc-98c1-23c6fa21bb5b",
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsUpdateAssetTypeFields failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAssetTypeFieldsRequest](../../models/operations/updateassettypefieldsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteAssetTypeFields


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_assets**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAssetTypeFields" method="delete" path="/assettypefield/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.assetTypeFields.deleteAssetTypeFields({
    uuid: "37e935e1-ba68-4478-9005-62faed2c70ed",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { assetTypeFieldsDeleteAssetTypeFields } from "servicem8/funcs/assetTypeFieldsDeleteAssetTypeFields.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await assetTypeFieldsDeleteAssetTypeFields(serviceM8, {
    uuid: "37e935e1-ba68-4478-9005-62faed2c70ed",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetTypeFieldsDeleteAssetTypeFields failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAssetTypeFieldsRequest](../../models/operations/deleteassettypefieldsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
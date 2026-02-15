# TaxRates

## Overview

Operations related to Tax Rates

### Available Operations

* [listTaxRates](#listtaxrates) - List all Tax Rates
* [createTaxRates](#createtaxrates) - Create a new Tax Rate
* [getTaxRates](#gettaxrates) - Retrieve a Tax Rate
* [updateTaxRates](#updatetaxrates) - Update a Tax Rate
* [deleteTaxRates](#deletetaxrates) - Delete a Tax Rate

## listTaxRates


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_tax_rates**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTaxRates" method="get" path="/taxrate.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.listTaxRates();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesListTaxRates } from "servicem8/funcs/taxRatesListTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesListTaxRates(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesListTaxRates failed:", res.error);
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

**Promise\<[components.TaxRate[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createTaxRates


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_tax_rates**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="createTaxRates" method="post" path="/taxrate.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.createTaxRates({
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesCreateTaxRates } from "servicem8/funcs/taxRatesCreateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesCreateTaxRates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesCreateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="createTaxRates" method="post" path="/taxrate.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.createTaxRates({
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesCreateTaxRates } from "servicem8/funcs/taxRatesCreateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesCreateTaxRates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesCreateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="createTaxRates" method="post" path="/taxrate.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.createTaxRates({
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesCreateTaxRates } from "servicem8/funcs/taxRatesCreateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesCreateTaxRates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesCreateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="createTaxRates" method="post" path="/taxrate.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.createTaxRates({
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesCreateTaxRates } from "servicem8/funcs/taxRatesCreateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesCreateTaxRates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesCreateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="createTaxRates" method="post" path="/taxrate.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.createTaxRates({
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesCreateTaxRates } from "servicem8/funcs/taxRatesCreateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesCreateTaxRates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesCreateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="createTaxRates" method="post" path="/taxrate.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.createTaxRates({
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesCreateTaxRates } from "servicem8/funcs/taxRatesCreateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesCreateTaxRates(serviceM8, {
    name: "<value>",
    uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesCreateTaxRates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.TaxRateCreate](../../models/components/taxratecreate.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTaxRatesResponse](../../models/operations/createtaxratesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getTaxRates


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_tax_rates**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTaxRates" method="get" path="/taxrate/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.getTaxRates({
    uuid: "f8fd7d82-41b8-4914-91af-451b3a1468da",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesGetTaxRates } from "servicem8/funcs/taxRatesGetTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesGetTaxRates(serviceM8, {
    uuid: "f8fd7d82-41b8-4914-91af-451b3a1468da",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesGetTaxRates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTaxRatesRequest](../../models/operations/gettaxratesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TaxRate](../../models/components/taxrate.md)\>**

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

## updateTaxRates


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_tax_rates**.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="updateTaxRates" method="post" path="/taxrate/{uuid}.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.updateTaxRates({
    uuid: "1698625d-cf9e-4b2d-b5ef-bb9580502169",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
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
import { taxRatesUpdateTaxRates } from "servicem8/funcs/taxRatesUpdateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesUpdateTaxRates(serviceM8, {
    uuid: "1698625d-cf9e-4b2d-b5ef-bb9580502169",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesUpdateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="updateTaxRates" method="post" path="/taxrate/{uuid}.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.updateTaxRates({
    uuid: "1698625d-cf9e-4b2d-b5ef-bb9580502169",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
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
import { taxRatesUpdateTaxRates } from "servicem8/funcs/taxRatesUpdateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesUpdateTaxRates(serviceM8, {
    uuid: "1698625d-cf9e-4b2d-b5ef-bb9580502169",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesUpdateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="updateTaxRates" method="post" path="/taxrate/{uuid}.json" example="notFound" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.updateTaxRates({
    uuid: "cf48920b-19ec-45cb-901d-019b965656a5",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
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
import { taxRatesUpdateTaxRates } from "servicem8/funcs/taxRatesUpdateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesUpdateTaxRates(serviceM8, {
    uuid: "cf48920b-19ec-45cb-901d-019b965656a5",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesUpdateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="updateTaxRates" method="post" path="/taxrate/{uuid}.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.updateTaxRates({
    uuid: "255f898d-5521-44a2-ad73-64510a4094bd",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
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
import { taxRatesUpdateTaxRates } from "servicem8/funcs/taxRatesUpdateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesUpdateTaxRates(serviceM8, {
    uuid: "255f898d-5521-44a2-ad73-64510a4094bd",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesUpdateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="updateTaxRates" method="post" path="/taxrate/{uuid}.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.updateTaxRates({
    uuid: "0b592381-2342-4145-ae4b-ab84ce4eca9c",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
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
import { taxRatesUpdateTaxRates } from "servicem8/funcs/taxRatesUpdateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesUpdateTaxRates(serviceM8, {
    uuid: "0b592381-2342-4145-ae4b-ab84ce4eca9c",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesUpdateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="updateTaxRates" method="post" path="/taxrate/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.updateTaxRates({
    uuid: "276d45f4-bf8b-41ae-82d4-264af7ec45cc",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
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
import { taxRatesUpdateTaxRates } from "servicem8/funcs/taxRatesUpdateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesUpdateTaxRates(serviceM8, {
    uuid: "276d45f4-bf8b-41ae-82d4-264af7ec45cc",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesUpdateTaxRates failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="updateTaxRates" method="post" path="/taxrate/{uuid}.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.updateTaxRates({
    uuid: "276d45f4-bf8b-41ae-82d4-264af7ec45cc",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
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
import { taxRatesUpdateTaxRates } from "servicem8/funcs/taxRatesUpdateTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesUpdateTaxRates(serviceM8, {
    uuid: "276d45f4-bf8b-41ae-82d4-264af7ec45cc",
    taxRateCreate: {
      name: "<value>",
      uuid: "123e4567-49ab-4405-a2fb-23c6fcd73c2b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesUpdateTaxRates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTaxRatesRequest](../../models/operations/updatetaxratesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteTaxRates


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_tax_rates**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteTaxRates" method="delete" path="/taxrate/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.taxRates.deleteTaxRates({
    uuid: "75f0f882-068d-4d46-a6e7-9048cb5a168d",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { taxRatesDeleteTaxRates } from "servicem8/funcs/taxRatesDeleteTaxRates.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await taxRatesDeleteTaxRates(serviceM8, {
    uuid: "75f0f882-068d-4d46-a6e7-9048cb5a168d",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxRatesDeleteTaxRates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTaxRatesRequest](../../models/operations/deletetaxratesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
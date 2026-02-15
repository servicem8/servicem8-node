# Suppliers

## Overview

Operations related to Suppliers

### Available Operations

* [listSuppliers](#listsuppliers) - List all Suppliers
* [createSuppliers](#createsuppliers) - Create a new Supplier
* [getSuppliers](#getsuppliers) - Retrieve a Supplier
* [updateSuppliers](#updatesuppliers) - Update a Supplier
* [deleteSuppliers](#deletesuppliers) - Delete a Supplier

## listSuppliers


			
#### Filtering
This endpoint supports result filtering. For more information on how to filter this request, [go here](/docs/filtering).
			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_suppliers**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSuppliers" method="get" path="/supplier.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.listSuppliers();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersListSuppliers } from "servicem8/funcs/suppliersListSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersListSuppliers(serviceM8);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersListSuppliers failed:", res.error);
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

**Promise\<[components.Supplier[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## createSuppliers


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_suppliers**.

			
			
#### Record UUID
UUID is optional for record creation. If no UUID is supplied, a UUID will be automatically generated for the new record and returned in the `x-record-uuid` response header.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="createSuppliers" method="post" path="/supplier.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.createSuppliers({
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersCreateSuppliers } from "servicem8/funcs/suppliersCreateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersCreateSuppliers(serviceM8, {
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="createSuppliers" method="post" path="/supplier.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.createSuppliers({
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersCreateSuppliers } from "servicem8/funcs/suppliersCreateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersCreateSuppliers(serviceM8, {
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="createSuppliers" method="post" path="/supplier.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.createSuppliers({
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersCreateSuppliers } from "servicem8/funcs/suppliersCreateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersCreateSuppliers(serviceM8, {
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="createSuppliers" method="post" path="/supplier.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.createSuppliers({
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersCreateSuppliers } from "servicem8/funcs/suppliersCreateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersCreateSuppliers(serviceM8, {
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="createSuppliers" method="post" path="/supplier.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.createSuppliers({
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersCreateSuppliers } from "servicem8/funcs/suppliersCreateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersCreateSuppliers(serviceM8, {
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="createSuppliers" method="post" path="/supplier.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.createSuppliers({
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersCreateSuppliers } from "servicem8/funcs/suppliersCreateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersCreateSuppliers(serviceM8, {
    uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersCreateSuppliers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SupplierCreate](../../models/components/suppliercreate.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSuppliersResponse](../../models/operations/createsuppliersresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.AuthenticationError | 401                        | application/json           |
| errors.ForbiddenError      | 403                        | application/json           |
| errors.RateLimitError      | 429                        | application/json           |
| errors.ErrorT              | 500                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getSuppliers


			
#### OAuth Scope
This endpoint requires the following OAuth scope **read_suppliers**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSuppliers" method="get" path="/supplier/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.getSuppliers({
    uuid: "5a2a31de-7b80-40dc-ad09-07ab3cdd11fd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersGetSuppliers } from "servicem8/funcs/suppliersGetSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersGetSuppliers(serviceM8, {
    uuid: "5a2a31de-7b80-40dc-ad09-07ab3cdd11fd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersGetSuppliers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSuppliersRequest](../../models/operations/getsuppliersrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Supplier](../../models/components/supplier.md)\>**

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

## updateSuppliers


			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_suppliers**.

			

### Example Usage: badRequest

<!-- UsageSnippet language="typescript" operationID="updateSuppliers" method="post" path="/supplier/{uuid}.json" example="badRequest" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.updateSuppliers({
    uuid: "d48a675c-bc10-4104-92c5-b810afd7dfe0",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
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
import { suppliersUpdateSuppliers } from "servicem8/funcs/suppliersUpdateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersUpdateSuppliers(serviceM8, {
    uuid: "d48a675c-bc10-4104-92c5-b810afd7dfe0",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: forbidden

<!-- UsageSnippet language="typescript" operationID="updateSuppliers" method="post" path="/supplier/{uuid}.json" example="forbidden" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.updateSuppliers({
    uuid: "ced040cd-4603-4ff5-8946-6580d2ae0752",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
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
import { suppliersUpdateSuppliers } from "servicem8/funcs/suppliersUpdateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersUpdateSuppliers(serviceM8, {
    uuid: "ced040cd-4603-4ff5-8946-6580d2ae0752",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: notFound

<!-- UsageSnippet language="typescript" operationID="updateSuppliers" method="post" path="/supplier/{uuid}.json" example="notFound" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.updateSuppliers({
    uuid: "40638c9c-f7fa-4853-b0bb-50c600ea37d8",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
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
import { suppliersUpdateSuppliers } from "servicem8/funcs/suppliersUpdateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersUpdateSuppliers(serviceM8, {
    uuid: "40638c9c-f7fa-4853-b0bb-50c600ea37d8",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitDay

<!-- UsageSnippet language="typescript" operationID="updateSuppliers" method="post" path="/supplier/{uuid}.json" example="rateLimitDay" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.updateSuppliers({
    uuid: "0417e2a3-15f2-4c85-acb9-9dfd1c243ac8",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
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
import { suppliersUpdateSuppliers } from "servicem8/funcs/suppliersUpdateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersUpdateSuppliers(serviceM8, {
    uuid: "0417e2a3-15f2-4c85-acb9-9dfd1c243ac8",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: rateLimitMinute

<!-- UsageSnippet language="typescript" operationID="updateSuppliers" method="post" path="/supplier/{uuid}.json" example="rateLimitMinute" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.updateSuppliers({
    uuid: "43ea88ca-ae0f-486c-b8ee-d410bcb9564a",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
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
import { suppliersUpdateSuppliers } from "servicem8/funcs/suppliersUpdateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersUpdateSuppliers(serviceM8, {
    uuid: "43ea88ca-ae0f-486c-b8ee-d410bcb9564a",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="updateSuppliers" method="post" path="/supplier/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.updateSuppliers({
    uuid: "30f92dc0-c0e9-4396-8f83-3b2ad7bdd688",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
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
import { suppliersUpdateSuppliers } from "servicem8/funcs/suppliersUpdateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersUpdateSuppliers(serviceM8, {
    uuid: "30f92dc0-c0e9-4396-8f83-3b2ad7bdd688",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdateSuppliers failed:", res.error);
  }
}

run();
```
### Example Usage: unauthorized

<!-- UsageSnippet language="typescript" operationID="updateSuppliers" method="post" path="/supplier/{uuid}.json" example="unauthorized" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.updateSuppliers({
    uuid: "58e54f3f-658a-42ec-93c2-89211c0290c6",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
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
import { suppliersUpdateSuppliers } from "servicem8/funcs/suppliersUpdateSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersUpdateSuppliers(serviceM8, {
    uuid: "58e54f3f-658a-42ec-93c2-89211c0290c6",
    supplierCreate: {
      uuid: "123e4567-83b3-4d58-a0ed-23c6fa0f8edb",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersUpdateSuppliers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSuppliersRequest](../../models/operations/updatesuppliersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteSuppliers


			
In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are still accessible on the API, but are hidden in the UI. Inactive records can be restored by setting their `active` field to `1`.

			
			
#### OAuth Scope
This endpoint requires the following OAuth scope **manage_suppliers**.

			

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSuppliers" method="delete" path="/supplier/{uuid}.json" example="success" -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.suppliers.deleteSuppliers({
    uuid: "607c649a-3c5f-4e9e-92d1-95dc644beba6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ServiceM8Core } from "servicem8/core.js";
import { suppliersDeleteSuppliers } from "servicem8/funcs/suppliersDeleteSuppliers.js";

// Use `ServiceM8Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const serviceM8 = new ServiceM8Core({
  security: {
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await suppliersDeleteSuppliers(serviceM8, {
    uuid: "607c649a-3c5f-4e9e-92d1-95dc644beba6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersDeleteSuppliers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSuppliersRequest](../../models/operations/deletesuppliersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
# CreateJobQueuesResponse

## Example Usage

```typescript
import { CreateJobQueuesResponse } from "servicem8/models/operations";

let value: CreateJobQueuesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    errorCode: 1000,
    message: "An error occurred completing your request",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `headers`                                  | Record<string, *string*[]>                 | :heavy_check_mark:                         | N/A                                        |
| `result`                                   | *operations.CreateJobQueuesResponseResult* | :heavy_check_mark:                         | N/A                                        |
# CreateJobQueuesResponse

## Example Usage

```typescript
import { CreateJobQueuesResponse } from "servicem8/models/operations";

let value: CreateJobQueuesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    errorCode: 0,
    message: "OK",
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `headers`                                  | Record<string, *string*[]>                 | :heavy_check_mark:                         | N/A                                        |
| `result`                                   | *operations.CreateJobQueuesResponseResult* | :heavy_check_mark:                         | N/A                                        |
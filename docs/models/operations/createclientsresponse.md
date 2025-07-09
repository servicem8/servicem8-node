# CreateClientsResponse

## Example Usage

```typescript
import { CreateClientsResponse } from "servicem8/models/operations";

let value: CreateClientsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    errorCode: 1000,
    message: "An error occurred completing your request",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `headers`                                | Record<string, *string*[]>               | :heavy_check_mark:                       | N/A                                      |
| `result`                                 | *operations.CreateClientsResponseResult* | :heavy_check_mark:                       | N/A                                      |
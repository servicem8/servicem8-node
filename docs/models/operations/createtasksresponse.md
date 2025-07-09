# CreateTasksResponse

## Example Usage

```typescript
import { CreateTasksResponse } from "servicem8/models/operations";

let value: CreateTasksResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
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

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.CreateTasksResponseResult* | :heavy_check_mark:                     | N/A                                    |
# CreateTasksResponse

## Example Usage

```typescript
import { CreateTasksResponse } from "servicem8/models/operations";

let value: CreateTasksResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    errorCode: 0,
    message: "OK",
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `headers`                              | Record<string, *string*[]>             | :heavy_check_mark:                     | N/A                                    |
| `result`                               | *operations.CreateTasksResponseResult* | :heavy_check_mark:                     | N/A                                    |
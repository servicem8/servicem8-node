# CreateJobPaymentsResponse

## Example Usage

```typescript
import { CreateJobPaymentsResponse } from "servicem8/models/operations";

let value: CreateJobPaymentsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    errorCode: 0,
    message: "OK",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `headers`                                    | Record<string, *string*[]>                   | :heavy_check_mark:                           | N/A                                          |
| `result`                                     | *operations.CreateJobPaymentsResponseResult* | :heavy_check_mark:                           | N/A                                          |
# CreateBundlesResponse

## Example Usage

```typescript
import { CreateBundlesResponse } from "servicem8/models/operations";

let value: CreateBundlesResponse = {
  headers: {
    "key": [],
    "key1": [
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

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `headers`                                | Record<string, *string*[]>               | :heavy_check_mark:                       | N/A                                      |
| `result`                                 | *operations.CreateBundlesResponseResult* | :heavy_check_mark:                       | N/A                                      |
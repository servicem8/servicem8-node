# CreateLocationsResponse

## Example Usage

```typescript
import { CreateLocationsResponse } from "servicem8/models/operations";

let value: CreateLocationsResponse = {
  headers: {
    "key": [
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

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `headers`                                  | Record<string, *string*[]>                 | :heavy_check_mark:                         | N/A                                        |
| `result`                                   | *operations.CreateLocationsResponseResult* | :heavy_check_mark:                         | N/A                                        |
# CreateMaterialsResponse

## Example Usage

```typescript
import { CreateMaterialsResponse } from "servicem8/models/operations";

let value: CreateMaterialsResponse = {
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

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `headers`                                  | Record<string, *string*[]>                 | :heavy_check_mark:                         | N/A                                        |
| `result`                                   | *operations.CreateMaterialsResponseResult* | :heavy_check_mark:                         | N/A                                        |
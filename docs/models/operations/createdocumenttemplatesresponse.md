# CreateDocumentTemplatesResponse

## Example Usage

```typescript
import { CreateDocumentTemplatesResponse } from "servicem8/models/operations";

let value: CreateDocumentTemplatesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
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

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `headers`                                          | Record<string, *string*[]>                         | :heavy_check_mark:                                 | N/A                                                |
| `result`                                           | *operations.CreateDocumentTemplatesResponseResult* | :heavy_check_mark:                                 | N/A                                                |
# CreateJobTemplatesResponse

## Example Usage

```typescript
import { CreateJobTemplatesResponse } from "servicem8/models/operations";

let value: CreateJobTemplatesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
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

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `headers`                                     | Record<string, *string*[]>                    | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | *operations.CreateJobTemplatesResponseResult* | :heavy_check_mark:                            | N/A                                           |
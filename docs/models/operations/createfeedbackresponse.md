# CreateFeedbackResponse

## Example Usage

```typescript
import { CreateFeedbackResponse } from "servicem8/models/operations";

let value: CreateFeedbackResponse = {
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

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | *operations.CreateFeedbackResponseResult* | :heavy_check_mark:                        | N/A                                       |
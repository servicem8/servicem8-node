# CreateBadgesResponse

## Example Usage

```typescript
import { CreateBadgesResponse } from "servicem8/models/operations";

let value: CreateBadgesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    errorCode: 1000,
    message: "An error occurred completing your request",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `headers`                               | Record<string, *string*[]>              | :heavy_check_mark:                      | N/A                                     |
| `result`                                | *operations.CreateBadgesResponseResult* | :heavy_check_mark:                      | N/A                                     |
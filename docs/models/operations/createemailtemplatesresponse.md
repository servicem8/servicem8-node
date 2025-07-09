# CreateEmailTemplatesResponse

## Example Usage

```typescript
import { CreateEmailTemplatesResponse } from "servicem8/models/operations";

let value: CreateEmailTemplatesResponse = {
  headers: {
    "key": [
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

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `headers`                                       | Record<string, *string*[]>                      | :heavy_check_mark:                              | N/A                                             |
| `result`                                        | *operations.CreateEmailTemplatesResponseResult* | :heavy_check_mark:                              | N/A                                             |
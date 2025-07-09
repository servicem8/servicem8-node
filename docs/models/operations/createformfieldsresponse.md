# CreateFormFieldsResponse

## Example Usage

```typescript
import { CreateFormFieldsResponse } from "servicem8/models/operations";

let value: CreateFormFieldsResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    errorCode: 0,
    message: "OK",
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `headers`                                   | Record<string, *string*[]>                  | :heavy_check_mark:                          | N/A                                         |
| `result`                                    | *operations.CreateFormFieldsResponseResult* | :heavy_check_mark:                          | N/A                                         |
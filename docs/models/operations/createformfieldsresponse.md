# CreateFormFieldsResponse

## Example Usage

```typescript
import { CreateFormFieldsResponse } from "servicem8/models/operations";

let value: CreateFormFieldsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [],
  },
  result: {
    errorCode: 0,
    message: "OK",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Result](../../models/components/result.md) | :heavy_check_mark:                                     | N/A                                                    |
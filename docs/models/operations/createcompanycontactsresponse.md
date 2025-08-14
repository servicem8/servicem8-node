# CreateCompanyContactsResponse

## Example Usage

```typescript
import { CreateCompanyContactsResponse } from "servicem8/models/operations";

let value: CreateCompanyContactsResponse = {
  headers: {
    "key": [
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

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [components.Result](../../models/components/result.md) | :heavy_check_mark:                                     | N/A                                                    |
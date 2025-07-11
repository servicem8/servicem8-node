# GeneralSearchRequest

## Example Usage

```typescript
import { GeneralSearchRequest } from "servicem8/models/operations";

let value: GeneralSearchRequest = {
  q: "plumbing repair",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `q`                                          | *string*                                     | :heavy_check_mark:                           | Search query string                          | plumbing repair                              |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | Maximum number of results to return (max 50) |                                              |
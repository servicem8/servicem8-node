# ErrorT

## Example Usage

```typescript
import { ErrorT } from "servicem8/models/components";

let value: ErrorT = {
  errorCode: 1000,
  message: "An error occurred completing your request",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `errorCode`                               | *number*                                  | :heavy_minus_sign:                        | N/A                                       | 1000                                      |
| `message`                                 | *string*                                  | :heavy_minus_sign:                        | N/A                                       | An error occurred completing your request |
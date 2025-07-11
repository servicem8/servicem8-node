# CreateJobFromTemplateResponse

## Example Usage

```typescript
import { CreateJobFromTemplateResponse } from "servicem8/models/operations";

let value: CreateJobFromTemplateResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    jobUUID: "8fcb4828-b80d-4e76-ac44-56a680aa5169",
    location: "<value>",
    message: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.CreateJobFromTemplateResponseBody](../../models/operations/createjobfromtemplateresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
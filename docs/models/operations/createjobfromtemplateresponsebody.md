# CreateJobFromTemplateResponseBody

Job created successfully

## Example Usage

```typescript
import { CreateJobFromTemplateResponseBody } from "servicem8/models/operations";

let value: CreateJobFromTemplateResponseBody = {
  jobUUID: "4fd896ca-e474-4870-95bf-fa54183d1c2f",
  location: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `jobUUID`                            | *string*                             | :heavy_check_mark:                   | UUID of the created job              |
| `location`                           | *string*                             | :heavy_check_mark:                   | API path to the created job resource |
| `message`                            | *string*                             | :heavy_check_mark:                   | Success message                      |
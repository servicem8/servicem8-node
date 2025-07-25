# UpdateJobTemplatesRequest

## Example Usage

```typescript
import { UpdateJobTemplatesRequest } from "servicem8/models/operations";

let value: UpdateJobTemplatesRequest = {
  uuid: "c030e7d9-027a-4e4b-999d-3a99b7a67f7c",
  jobTemplate: {
    uuid: "123e4567-2bf2-4c47-952e-230c48360dfb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Template                                                   |
| `jobTemplate`                                                              | [components.JobTemplateInput](../../models/components/jobtemplateinput.md) | :heavy_check_mark:                                                         | Job Template fields to update                                              |
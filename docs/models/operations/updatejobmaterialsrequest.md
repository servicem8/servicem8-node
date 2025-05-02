# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-8f8c-4944-8e5a-22b6c653731b",
    jobUuid: "123e4567-0307-4791-a80b-22b6c09e3b2b",
    materialUuid: "123e4567-9590-4e83-93c8-22b6c06be6cb",
    quantity: "<value>",
    taxRateUuid: "123e4567-feec-41c9-b983-22b6cdb80ceb",
    jobMaterialBundleUuid: "123e4567-94c3-448c-8c7e-22b6cf55047b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
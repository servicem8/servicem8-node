# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-c3bf-4f8d-b736-230b7ebd1efb",
    jobUuid: "123e4567-93d8-43f3-a86e-230b7be07a4b",
    materialUuid: "123e4567-92da-4962-9394-230b75b9904b",
    quantity: "<value>",
    taxRateUuid: "123e4567-5ccc-4fb8-9d7f-230b71888beb",
    jobMaterialBundleUuid: "123e4567-ce23-4fe6-a1dc-230b7d93508b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
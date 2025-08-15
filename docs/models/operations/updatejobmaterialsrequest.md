# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-74a7-4a41-a16e-2320a5bb5fab",
    jobUuid: "123e4567-e4b0-4cc6-bed0-2320ae054aab",
    materialUuid: "123e4567-450b-44d2-989a-2320a48e500b",
    quantity: "<value>",
    taxRateUuid: "123e4567-77be-42cb-a1e1-2320a802e8bb",
    jobMaterialBundleUuid: "123e4567-b620-4927-a7f2-2320a207e85b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
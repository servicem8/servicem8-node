# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-6560-4213-a170-22b4d07e2f8b",
    jobUuid: "123e4567-3a23-4525-9440-22b4de77c4cb",
    materialUuid: "123e4567-ac3d-4900-8a8c-22b4d3971e4b",
    quantity: "<value>",
    taxRateUuid: "123e4567-da25-40d6-8cf2-22b4dd063f6b",
    jobMaterialBundleUuid: "123e4567-a5ac-4bb6-bca3-22b4df824f9b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
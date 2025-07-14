# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-cd28-439e-956e-230048460cbb",
    jobUuid: "123e4567-b68d-4cab-a7f3-230043c7d50b",
    materialUuid: "123e4567-c1c2-49f6-bf2e-23004079a12b",
    quantity: "<value>",
    taxRateUuid: "123e4567-efa6-4482-8c8e-2300425e2acb",
    jobMaterialBundleUuid: "123e4567-19e5-4a94-bdff-23004819337b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
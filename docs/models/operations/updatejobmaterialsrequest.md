# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-3cd3-4be4-8943-23004439e2eb",
    jobUuid: "123e4567-262f-4277-8366-23004ae8159b",
    materialUuid: "123e4567-477b-4625-8cf0-2300478e938b",
    quantity: "<value>",
    taxRateUuid: "123e4567-6aee-4454-869a-23004b877ebb",
    jobMaterialBundleUuid: "123e4567-4f91-43cb-9860-2300486cf16b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
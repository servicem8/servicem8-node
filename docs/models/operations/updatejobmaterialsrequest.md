# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-4bc5-45bd-afbf-230c4073949b",
    jobUuid: "123e4567-29ef-4e0a-aa46-230c45fcecdb",
    materialUuid: "123e4567-1447-43ff-9fa4-230c4ebb542b",
    quantity: "<value>",
    taxRateUuid: "123e4567-60e6-4c17-9e20-230c47a8373b",
    jobMaterialBundleUuid: "123e4567-07b8-4832-a590-230c418973ab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
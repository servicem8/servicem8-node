# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-903a-4b3b-bb73-230fe882d2ab",
    jobUuid: "123e4567-d431-4d34-bd1c-230febe2de8b",
    materialUuid: "123e4567-0654-40af-afbd-230fe4b15c5b",
    quantity: "<value>",
    taxRateUuid: "123e4567-e9b0-498f-8b0e-230fe62c7f4b",
    jobMaterialBundleUuid: "123e4567-2f36-48ff-a9d2-230fe40a8edb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
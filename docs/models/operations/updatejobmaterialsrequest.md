# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-dc1b-487f-9b2e-2306fede5f7b",
    jobUuid: "123e4567-70e0-4d19-8fca-2306f3e37e2b",
    materialUuid: "123e4567-e299-4b84-a6f9-2306f6dd308b",
    quantity: "<value>",
    taxRateUuid: "123e4567-b1cb-40e0-b6fc-2306f37ca9bb",
    jobMaterialBundleUuid: "123e4567-8150-4832-8d74-2306ffa19f1b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
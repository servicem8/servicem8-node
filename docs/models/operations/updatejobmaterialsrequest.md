# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-df7f-4659-a5ed-230b73447abb",
    jobUuid: "123e4567-2f90-40b8-b570-230b7aa4214b",
    materialUuid: "123e4567-3372-401e-9154-230b7ca7481b",
    quantity: "<value>",
    taxRateUuid: "123e4567-5499-4e36-86b3-230b75c3cffb",
    jobMaterialBundleUuid: "123e4567-b730-4448-be14-230b7aa2c89b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
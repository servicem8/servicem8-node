# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-37b3-4741-9d50-231cf967e5fb",
    jobUuid: "123e4567-e56a-42ce-bd9d-231cf5b5ab0b",
    materialUuid: "123e4567-d96b-4c43-86dd-231cf019fddb",
    quantity: "<value>",
    taxRateUuid: "123e4567-d861-4ad4-93cc-231cf9f83a4b",
    jobMaterialBundleUuid: "123e4567-1fca-4e31-aaf5-231cf6f84a7b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
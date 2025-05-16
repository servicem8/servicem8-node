# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-d533-405e-923d-22bdcd6aa9fb",
    jobUuid: "123e4567-2165-497e-91a4-22bdce1b153b",
    materialUuid: "123e4567-dba6-4f3d-b53d-22bdc705572b",
    quantity: "<value>",
    taxRateUuid: "123e4567-81e7-4cf3-8292-22bdcd5cff8b",
    jobMaterialBundleUuid: "123e4567-e6ab-49d2-8482-22bdc68e2abb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
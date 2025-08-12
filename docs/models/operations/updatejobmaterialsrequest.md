# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-0ece-44a3-8476-231d24ac44db",
    jobUuid: "123e4567-279c-4979-b841-231d20b8a2eb",
    materialUuid: "123e4567-39d8-4dc6-98c9-231d2dd8cbcb",
    quantity: "<value>",
    taxRateUuid: "123e4567-ae1b-48d0-b48e-231d2057084b",
    jobMaterialBundleUuid: "123e4567-6706-46ea-9ebe-231d27baebab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
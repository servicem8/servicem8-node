# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-874c-4e0b-85e4-23eb2e710adb",
    materialUuid: "123e4567-f7bd-4e60-aa62-23eb23556fab",
    quantity: "<value>",
    taxRateUuid: "123e4567-3b35-4ea1-ab69-23eb23c341ab",
    uuid: "123e4567-2f86-4198-b67e-23eb22cdf34b",
    jobMaterialBundleUuid: "123e4567-5321-47bb-bb5e-23eb2c5e48eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
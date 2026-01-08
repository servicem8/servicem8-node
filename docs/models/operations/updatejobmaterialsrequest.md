# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-c49f-4990-a72e-23b2e330345b",
    materialUuid: "123e4567-c06c-4351-8c0c-23b2e196578b",
    quantity: "<value>",
    taxRateUuid: "123e4567-e5bf-49b5-ac43-23b2e7323b1b",
    uuid: "123e4567-ecf6-424a-9843-23b2e59d275b",
    jobMaterialBundleUuid: "123e4567-e39a-494a-a06a-23b2e6f2c97b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
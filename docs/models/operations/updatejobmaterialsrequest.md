# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-7315-4efd-bdf4-233c689d42fb",
    materialUuid: "123e4567-8fb6-49f4-bd94-233c6f895f3b",
    quantity: "<value>",
    taxRateUuid: "123e4567-797c-4e61-b288-233c6f97722b",
    uuid: "123e4567-b54c-4262-bab3-233c616b25fb",
    jobMaterialBundleUuid: "123e4567-fc6e-4451-a083-233c6d43032b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
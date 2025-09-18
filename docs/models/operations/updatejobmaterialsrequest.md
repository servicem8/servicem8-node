# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-01bd-43c7-bd75-23422971b47b",
    materialUuid: "123e4567-40f8-4fee-93e2-234228be8aab",
    quantity: "<value>",
    taxRateUuid: "123e4567-d250-4c12-98de-23422cf1068b",
    uuid: "123e4567-9be1-4ced-a76d-23422aeb491b",
    jobMaterialBundleUuid: "123e4567-a3b7-4486-87e8-23422a7727bb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
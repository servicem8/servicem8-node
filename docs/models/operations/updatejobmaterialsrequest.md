# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-d2d5-4f75-9e9d-23c6fefa5a4b",
    materialUuid: "123e4567-eb6f-44a1-b747-23c6f99e571b",
    quantity: "<value>",
    taxRateUuid: "123e4567-bf91-4210-b9a4-23c6f3ad990b",
    uuid: "123e4567-2a62-46b1-b607-23c6f660db9b",
    jobMaterialBundleUuid: "123e4567-f30a-4584-ae69-23c6fdf6d4eb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-455c-4324-b731-23eb232af59b",
    materialUuid: "123e4567-4efa-4530-8c60-23eb2b88a8db",
    quantity: "<value>",
    taxRateUuid: "123e4567-ebc9-42a9-a06b-23eb2eeb5c0b",
    uuid: "123e4567-fb5d-473b-94f4-23eb290de24b",
    jobMaterialBundleUuid: "123e4567-a093-4865-8da3-23eb26a6af4b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
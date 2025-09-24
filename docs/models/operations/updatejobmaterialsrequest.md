# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-34aa-486d-8669-23482137beeb",
    materialUuid: "123e4567-ffb3-461c-b915-23482c6dce9b",
    quantity: "<value>",
    taxRateUuid: "123e4567-f49b-44a9-9545-23482a94897b",
    uuid: "123e4567-9d98-4d4f-b1f1-234822b8835b",
    jobMaterialBundleUuid: "123e4567-10e4-494f-bfa0-2348255e4feb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
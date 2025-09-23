# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-9fc9-48a4-890d-2346740a9abb",
    materialUuid: "123e4567-254b-4900-bc16-234675b70bcb",
    quantity: "<value>",
    taxRateUuid: "123e4567-f190-40a7-a240-234671b7cafb",
    uuid: "123e4567-1ba7-4870-b862-23467e2bedcb",
    jobMaterialBundleUuid: "123e4567-07b8-403a-aaaf-23467049b34b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
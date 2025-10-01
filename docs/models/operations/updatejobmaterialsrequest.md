# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-af03-4acc-886c-234d50bd4d7b",
    materialUuid: "123e4567-3046-4f27-9351-234d5aea77fb",
    quantity: "<value>",
    taxRateUuid: "123e4567-71c2-4467-ac92-234d5d479f3b",
    uuid: "123e4567-9d5e-494d-add8-234d5d9b16cb",
    jobMaterialBundleUuid: "123e4567-3fb4-42fa-9d58-234d5e5dd0ab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
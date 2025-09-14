# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-3e48-432b-bd5a-233c610f1e6b",
    materialUuid: "123e4567-36a1-46d1-bf5f-233c6da70c4b",
    quantity: "<value>",
    taxRateUuid: "123e4567-68e5-4b85-b449-233c63d4e65b",
    uuid: "123e4567-d92f-4cda-92ae-233c62d4a94b",
    jobMaterialBundleUuid: "123e4567-6e8c-45b8-9328-233c6e67f0bb",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
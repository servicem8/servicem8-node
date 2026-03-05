# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-442e-4829-b4f1-23e933de8f7b",
    materialUuid: "123e4567-300d-47de-a104-23e93c53052b",
    quantity: "<value>",
    taxRateUuid: "123e4567-9c5a-4218-a38d-23e933c8f1fb",
    uuid: "123e4567-769b-4987-9813-23e936c7287b",
    jobMaterialBundleUuid: "123e4567-295a-4a25-a35c-23e93177cc8b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
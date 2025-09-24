# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-489d-423d-b4f9-234827e94a9b",
    materialUuid: "123e4567-cddd-4659-bc6f-23482e99370b",
    quantity: "<value>",
    taxRateUuid: "123e4567-107b-49f6-9299-234822cb675b",
    uuid: "123e4567-fbc1-4d1b-b0cc-234821f3cbfb",
    jobMaterialBundleUuid: "123e4567-e46e-41a8-8172-234825790d8b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
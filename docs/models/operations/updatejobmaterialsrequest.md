# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-2f4f-465b-9355-23d59354257b",
    materialUuid: "123e4567-d355-4faf-ac69-23d59d10a55b",
    quantity: "<value>",
    taxRateUuid: "123e4567-5b31-4ee0-b79a-23d59967745b",
    uuid: "123e4567-e779-4bc1-b604-23d59eeb975b",
    jobMaterialBundleUuid: "123e4567-3b66-4a92-a2a2-23d593ba7f1b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
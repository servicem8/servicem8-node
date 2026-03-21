# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-6110-4f36-93cc-23f94736b95b",
    materialUuid: "123e4567-e645-4a4d-bb32-23f94a99a5ab",
    quantity: "<value>",
    taxRateUuid: "123e4567-1528-43e7-a99b-23f944dde9cb",
    uuid: "123e4567-59d5-48ed-8c3e-23f94642c1db",
    jobMaterialBundleUuid: "123e4567-beac-430e-9edc-23f94068e49b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
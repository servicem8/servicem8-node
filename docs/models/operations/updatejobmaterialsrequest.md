# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterialCreate: {
    jobUuid: "123e4567-fea4-475d-9c07-23497833042b",
    materialUuid: "123e4567-e5e0-44e7-a0e6-23497bd6e9eb",
    quantity: "<value>",
    taxRateUuid: "123e4567-178c-4302-ae9f-23497b6753db",
    uuid: "123e4567-1675-43be-94c9-23497192da9b",
    jobMaterialBundleUuid: "123e4567-62f5-467b-8ef4-2349786f4e1b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Job Material                                                     |
| `jobMaterialCreate`                                                          | [components.JobMaterialCreate](../../models/components/jobmaterialcreate.md) | :heavy_check_mark:                                                           | Job Material fields to update                                                |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-91de-493c-afe8-23184b996e9b",
    jobUuid: "123e4567-e3ea-4a05-af7a-23184cf51c3b",
    materialUuid: "123e4567-497e-47d3-96e6-23184c28a4bb",
    quantity: "<value>",
    taxRateUuid: "123e4567-2e71-4ed2-8e28-231847e593fb",
    jobMaterialBundleUuid: "123e4567-7a6c-420b-bcdd-23184be484cb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
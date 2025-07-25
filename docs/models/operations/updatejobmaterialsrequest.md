# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-a9c6-4655-b123-230a6b6ae1fb",
    jobUuid: "123e4567-e49d-477c-bd20-230a6c75142b",
    materialUuid: "123e4567-d45e-47c6-a4d4-230a62264ebb",
    quantity: "<value>",
    taxRateUuid: "123e4567-050f-4f00-87e7-230a6b35c37b",
    jobMaterialBundleUuid: "123e4567-c6bc-4ae8-8117-230a6145b6ab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
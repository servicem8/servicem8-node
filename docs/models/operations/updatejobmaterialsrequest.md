# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-2c9e-45a3-b4e3-233121b3257b",
    jobUuid: "123e4567-efaa-4094-896f-233125aac23b",
    materialUuid: "123e4567-b83b-48d8-b270-23312ccbbf3b",
    quantity: "<value>",
    taxRateUuid: "123e4567-7571-4585-b6a0-233124ba561b",
    jobMaterialBundleUuid: "123e4567-4891-4c39-9b9d-2331233d793b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-4f38-4b68-81de-22b7061126fb",
    jobUuid: "123e4567-7170-4fb0-9029-22b70096a10b",
    materialUuid: "123e4567-9d12-4669-8dc0-22b70c07dd6b",
    quantity: "<value>",
    taxRateUuid: "123e4567-ab42-4a32-b9cb-22b701677a4b",
    jobMaterialBundleUuid: "123e4567-2d6c-4877-b8c0-22b70c87369b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
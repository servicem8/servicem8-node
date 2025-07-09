# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-0675-49d6-95b2-22fb215962fb",
    jobUuid: "123e4567-8bc5-4c80-bb3c-22fb2698f0ab",
    materialUuid: "123e4567-d02f-4711-afbc-22fb2b2ade8b",
    quantity: "<value>",
    taxRateUuid: "123e4567-1c41-4eac-a7f9-22fb2bb6231b",
    jobMaterialBundleUuid: "123e4567-3e0c-44b7-bbbd-22fb20443d2b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
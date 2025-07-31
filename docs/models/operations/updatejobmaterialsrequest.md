# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-db09-4bd9-9ee3-231107d1cfab",
    jobUuid: "123e4567-89ba-47da-991d-231102a4736b",
    materialUuid: "123e4567-5499-4f8b-8c12-231101f1830b",
    quantity: "<value>",
    taxRateUuid: "123e4567-c205-457d-8794-23110604b15b",
    jobMaterialBundleUuid: "123e4567-0c15-494e-a26b-23110216c80b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
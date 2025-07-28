# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-8941-48f5-b9c8-230ef61c4a6b",
    jobUuid: "123e4567-451b-483f-852b-230efaae14ab",
    materialUuid: "123e4567-5c91-4ab1-be3d-230ef723a4db",
    quantity: "<value>",
    taxRateUuid: "123e4567-a1df-450c-bc18-230efc96b08b",
    jobMaterialBundleUuid: "123e4567-a3fe-4ad6-9f55-230ef136a87b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
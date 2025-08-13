# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-c00d-4312-966a-231ef5cae6cb",
    jobUuid: "123e4567-665e-4bba-8029-231ef2c2403b",
    materialUuid: "123e4567-532d-404f-b4cf-231ef724f8ab",
    quantity: "<value>",
    taxRateUuid: "123e4567-41a3-4975-8833-231ef668c34b",
    jobMaterialBundleUuid: "123e4567-379a-4b5a-87c4-231ef6a4303b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
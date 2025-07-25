# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-1b3a-473e-b6f1-230b73628d6b",
    jobUuid: "123e4567-73c4-4446-854b-230b71d3f28b",
    materialUuid: "123e4567-52bb-4d9c-b366-230b74c6307b",
    quantity: "<value>",
    taxRateUuid: "123e4567-775b-4d6c-ad93-230b7f45dd5b",
    jobMaterialBundleUuid: "123e4567-f77b-468e-a79d-230b7d7ccd0b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
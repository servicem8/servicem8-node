# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-38dc-4b6a-80ab-230c4e71583b",
    jobUuid: "123e4567-b2aa-4957-8cd0-230c4d65294b",
    materialUuid: "123e4567-27ae-44b3-960e-230c44d22c2b",
    quantity: "<value>",
    taxRateUuid: "123e4567-9180-44ad-99a4-230c40df528b",
    jobMaterialBundleUuid: "123e4567-c6d9-4bd1-afc4-230c4d37a3eb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
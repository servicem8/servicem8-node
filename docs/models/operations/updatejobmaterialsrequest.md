# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-148e-4830-9d5b-230b716e368b",
    jobUuid: "123e4567-0f48-41f3-a65d-230b7d1599db",
    materialUuid: "123e4567-9155-4cdb-97eb-230b79f35d0b",
    quantity: "<value>",
    taxRateUuid: "123e4567-950c-4a2d-8a4c-230b7122f5eb",
    jobMaterialBundleUuid: "123e4567-3eb3-42b0-be20-230b7aefef2b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-80e2-4c6a-b6f1-22bb0925c88b",
    jobUuid: "123e4567-b54e-4e4e-b7c7-22bb0f5727fb",
    materialUuid: "123e4567-5fea-4537-88e1-22bb084fa54b",
    quantity: "<value>",
    taxRateUuid: "123e4567-705e-4e07-a4ad-22bb0b1be28b",
    jobMaterialBundleUuid: "123e4567-cad7-4d38-abbc-22bb0b79301b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
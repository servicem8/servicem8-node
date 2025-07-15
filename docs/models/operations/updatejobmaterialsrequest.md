# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-140b-471a-a9aa-23012b7d317b",
    jobUuid: "123e4567-6778-4604-9582-230124433f3b",
    materialUuid: "123e4567-b263-433a-817a-2301223414eb",
    quantity: "<value>",
    taxRateUuid: "123e4567-63da-4a3d-a94e-23012f01163b",
    jobMaterialBundleUuid: "123e4567-342a-4a2d-9a4b-23012914788b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
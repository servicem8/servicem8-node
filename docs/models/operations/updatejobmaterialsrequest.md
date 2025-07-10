# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-d55f-4541-b940-22fc0652dc7b",
    jobUuid: "123e4567-804d-41cd-953a-22fc0652fe0b",
    materialUuid: "123e4567-8503-445e-82df-22fc02810a4b",
    quantity: "<value>",
    taxRateUuid: "123e4567-6a8b-4f46-b151-22fc0e9693fb",
    jobMaterialBundleUuid: "123e4567-b253-4714-9b32-22fc0f21ad7b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
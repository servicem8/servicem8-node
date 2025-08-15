# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-c266-4473-b0cd-231fe9a573bb",
    jobUuid: "123e4567-9b2f-4d97-94ef-231feb06275b",
    materialUuid: "123e4567-7a70-4094-95c2-231fe7f2f68b",
    quantity: "<value>",
    taxRateUuid: "123e4567-1ce5-469b-93e4-231fe555d30b",
    jobMaterialBundleUuid: "123e4567-6fe7-4adf-bf68-231fe061c17b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
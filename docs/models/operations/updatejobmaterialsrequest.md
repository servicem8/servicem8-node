# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-eca9-47b5-ac6c-231ef593393b",
    jobUuid: "123e4567-01f6-4037-8be8-231ef589c17b",
    materialUuid: "123e4567-b887-4ca2-8ca7-231efb12130b",
    quantity: "<value>",
    taxRateUuid: "123e4567-9f81-4805-819c-231ef54ea3db",
    jobMaterialBundleUuid: "123e4567-9e41-421a-aa40-231ef3e22beb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-2a5c-4493-a6a1-231eff7f786b",
    jobUuid: "123e4567-017e-4378-a41a-231ef46ff44b",
    materialUuid: "123e4567-db5b-41fd-b3a1-231ef6c09bfb",
    quantity: "<value>",
    taxRateUuid: "123e4567-46fe-4ec4-a83e-231ef7019a9b",
    jobMaterialBundleUuid: "123e4567-b99d-4c0b-90b0-231efe880ebb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
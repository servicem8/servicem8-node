# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-4094-4861-8061-22b56b96ea0b",
    jobUuid: "123e4567-bd56-4767-a250-22b56982f27b",
    materialUuid: "123e4567-be07-427c-b575-22b56fcb02ab",
    quantity: "<value>",
    taxRateUuid: "123e4567-49c9-4fd3-8e89-22b5606eb9db",
    jobMaterialBundleUuid: "123e4567-153a-41ad-af4c-22b56f9433fb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
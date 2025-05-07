# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-dd0f-48ab-b479-22bcb454e8db",
    jobUuid: "123e4567-f452-4241-b12e-22bcbf788b1b",
    materialUuid: "123e4567-cf85-46ad-a3c7-22bcbd9b734b",
    quantity: "<value>",
    taxRateUuid: "123e4567-b0b4-46b7-bae4-22bcb2fcb15b",
    jobMaterialBundleUuid: "123e4567-5a58-4d29-8e9b-22bcbc65e9db",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
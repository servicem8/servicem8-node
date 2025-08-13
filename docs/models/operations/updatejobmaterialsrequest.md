# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-e74f-4acf-8fd2-231d283febab",
    jobUuid: "123e4567-320a-46fd-b8f2-231d2333b4fb",
    materialUuid: "123e4567-5952-47ad-9530-231d2493840b",
    quantity: "<value>",
    taxRateUuid: "123e4567-9fbf-4f2a-b0ae-231d29f1f24b",
    jobMaterialBundleUuid: "123e4567-58e7-4993-a489-231d248efbab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
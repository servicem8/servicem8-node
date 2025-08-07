# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-db51-46fe-9d3a-231840307d4b",
    jobUuid: "123e4567-b64f-46e0-9bca-23184d159bbb",
    materialUuid: "123e4567-44d1-4182-8a3d-231844e2506b",
    quantity: "<value>",
    taxRateUuid: "123e4567-6ebc-4ad8-a49a-23184c86603b",
    jobMaterialBundleUuid: "123e4567-4215-4388-83c0-2318458fed7b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
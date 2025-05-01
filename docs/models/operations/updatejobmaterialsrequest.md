# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-4f96-4933-aba1-22b6c11b0f4b",
    jobUuid: "123e4567-3c1c-4f87-9a36-22b6cb287b6b",
    materialUuid: "123e4567-57f2-42a6-8d7f-22b6c450d12b",
    quantity: "<value>",
    taxRateUuid: "123e4567-c528-4f74-b89d-22b6cde3e49b",
    jobMaterialBundleUuid: "123e4567-bd22-4f58-9af0-22b6c160fcab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
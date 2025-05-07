# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-09f1-435f-9098-22bcb245509b",
    jobUuid: "123e4567-40c2-4238-82f5-22bcb311c4bb",
    materialUuid: "123e4567-61f4-4f21-86e0-22bcbab4c36b",
    quantity: "<value>",
    taxRateUuid: "123e4567-8335-48ba-876c-22bcb543b41b",
    jobMaterialBundleUuid: "123e4567-1054-430a-aeaf-22bcbecc248b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
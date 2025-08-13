# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-5ab8-4af8-8c25-231ef676780b",
    jobUuid: "123e4567-e012-4ec8-8afd-231ef8851edb",
    materialUuid: "123e4567-a176-426a-9733-231ef2359f4b",
    quantity: "<value>",
    taxRateUuid: "123e4567-0bd8-468c-86ae-231efebbbb6b",
    jobMaterialBundleUuid: "123e4567-d990-494c-8bb2-231ef6fe51ab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
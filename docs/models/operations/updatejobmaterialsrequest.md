# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-0f07-433e-96fa-231fefd78b6b",
    jobUuid: "123e4567-7fbb-4606-ac1f-231fe1124e3b",
    materialUuid: "123e4567-1e29-42c9-838a-231feaafb31b",
    quantity: "<value>",
    taxRateUuid: "123e4567-15fc-4870-b293-231fedc0307b",
    jobMaterialBundleUuid: "123e4567-bfc6-42ce-8d68-231fe87ae84b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
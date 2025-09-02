# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-6ec6-4ef7-8012-23312791bc3b",
    jobUuid: "123e4567-7af9-4771-9025-233120b3498b",
    materialUuid: "123e4567-2b5e-4705-856f-233122a2051b",
    quantity: "<value>",
    taxRateUuid: "123e4567-b59c-46ad-a8cb-23312c94a09b",
    jobMaterialBundleUuid: "123e4567-9a9d-40cb-8338-23312f321cfb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
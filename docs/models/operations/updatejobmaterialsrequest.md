# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-7fbe-4fa5-a449-231fe25f905b",
    jobUuid: "123e4567-e80c-4f95-af78-231fe8cf450b",
    materialUuid: "123e4567-aae0-4ea2-a2e9-231fe1ee41eb",
    quantity: "<value>",
    taxRateUuid: "123e4567-0195-43e5-9d1a-231fe92e08cb",
    jobMaterialBundleUuid: "123e4567-4f02-4800-8b33-231fe98fad0b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
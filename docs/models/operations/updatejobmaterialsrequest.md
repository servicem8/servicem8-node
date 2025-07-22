# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-9e9f-494b-9dcd-2308edfc4abb",
    jobUuid: "123e4567-2530-4d92-b598-2308ecf29ecb",
    materialUuid: "123e4567-1110-4189-957e-2308ed579b0b",
    quantity: "<value>",
    taxRateUuid: "123e4567-6da8-4119-ab77-2308e33d9d3b",
    jobMaterialBundleUuid: "123e4567-0b2f-40e9-ac5f-2308e6f8b33b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-7463-4b23-a564-2329ba2d259b",
    jobUuid: "123e4567-696c-493c-a79e-2329bb8c81cb",
    materialUuid: "123e4567-2a65-4928-aa0a-2329b51f990b",
    quantity: "<value>",
    taxRateUuid: "123e4567-a4cc-40f8-88c5-2329b5756cfb",
    jobMaterialBundleUuid: "123e4567-c4d0-4eae-90d2-2329bed23f3b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
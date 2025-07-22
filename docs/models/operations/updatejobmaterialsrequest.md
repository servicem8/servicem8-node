# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-e167-46f9-9e74-2308ed11a98b",
    jobUuid: "123e4567-9dff-4d00-80ef-2308e69f4d7b",
    materialUuid: "123e4567-e972-45c6-bcad-2308ee97723b",
    quantity: "<value>",
    taxRateUuid: "123e4567-d0fd-4391-aa2b-2308e7eba82b",
    jobMaterialBundleUuid: "123e4567-3ebf-4ade-a738-2308e8db789b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
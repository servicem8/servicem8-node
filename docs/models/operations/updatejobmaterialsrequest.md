# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-3e7b-45f5-954c-2307676ef65b",
    jobUuid: "123e4567-a857-4b8d-beac-2307678e161b",
    materialUuid: "123e4567-5218-4557-bd72-2307620053ab",
    quantity: "<value>",
    taxRateUuid: "123e4567-02de-4450-9cb1-230767bcf45b",
    jobMaterialBundleUuid: "123e4567-3776-4d41-b9a8-2307624e00ab",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-0275-4a8c-9096-230fe9ab8c1b",
    jobUuid: "123e4567-f9bf-461a-b943-230fe35fa24b",
    materialUuid: "123e4567-4cd7-43c0-837a-230fe17f9e5b",
    quantity: "<value>",
    taxRateUuid: "123e4567-5e92-4920-8302-230fea73e15b",
    jobMaterialBundleUuid: "123e4567-be37-452a-8e53-230fe495888b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-ba4a-4b5d-8daf-232223327d3b",
    jobUuid: "123e4567-d1c7-41eb-87ad-23222843182b",
    materialUuid: "123e4567-415c-4c83-a25a-2322211260db",
    quantity: "<value>",
    taxRateUuid: "123e4567-5a93-4db5-bb82-23222b59165b",
    jobMaterialBundleUuid: "123e4567-b90a-4947-a1ca-232224d7fd9b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
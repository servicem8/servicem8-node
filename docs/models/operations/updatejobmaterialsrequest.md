# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-96ce-4ef0-9025-230a631078fb",
    jobUuid: "123e4567-cadb-4667-83cd-230a6e9aec8b",
    materialUuid: "123e4567-9f42-4477-9eac-230a6295ff3b",
    quantity: "<value>",
    taxRateUuid: "123e4567-e072-44c8-968d-230a6ecd636b",
    jobMaterialBundleUuid: "123e4567-ab08-436a-9c75-230a6f87f55b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-f029-431e-87cf-232172e24d0b",
    jobUuid: "123e4567-5c83-4379-a864-23217f31ae3b",
    materialUuid: "123e4567-c21e-4d07-a9e6-232179a2bc3b",
    quantity: "<value>",
    taxRateUuid: "123e4567-285c-4b42-a9aa-23217e0bef3b",
    jobMaterialBundleUuid: "123e4567-c5ca-44cd-92b7-23217e4c7a6b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
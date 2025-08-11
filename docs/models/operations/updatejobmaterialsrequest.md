# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-e8dd-4f54-b8a8-231cf99b7e5b",
    jobUuid: "123e4567-12d2-4ce0-a0d0-231cff03612b",
    materialUuid: "123e4567-ff5b-4d9d-a859-231cf9f5120b",
    quantity: "<value>",
    taxRateUuid: "123e4567-1a69-4013-8851-231cfa521b1b",
    jobMaterialBundleUuid: "123e4567-970e-4b8c-bdfd-231cf837e02b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
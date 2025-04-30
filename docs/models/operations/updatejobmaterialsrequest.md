# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-8769-4594-b514-22b56333af7b",
    jobUuid: "123e4567-3636-4640-91ff-22b562e1341b",
    materialUuid: "123e4567-ff81-439c-956f-22b565cca92b",
    quantity: "<value>",
    taxRateUuid: "123e4567-d968-4b80-afe2-22b56f85efdb",
    jobMaterialBundleUuid: "123e4567-c5b7-4cba-a675-22b5634f5b3b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
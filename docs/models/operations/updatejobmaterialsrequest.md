# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-e496-403c-a230-231264b6d62b",
    jobUuid: "123e4567-32ac-451a-af93-231261a1b10b",
    materialUuid: "123e4567-6b4a-4abe-91ac-23126794f1cb",
    quantity: "<value>",
    taxRateUuid: "123e4567-3813-43cb-99b0-23126444ea6b",
    jobMaterialBundleUuid: "123e4567-36b7-4d8f-a424-231269d2c10b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
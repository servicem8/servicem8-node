# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-feed-48ee-baa0-231b2251f8eb",
    jobUuid: "123e4567-f859-4203-801e-231b2b5d718b",
    materialUuid: "123e4567-f65a-41bc-96a6-231b2fe7554b",
    quantity: "<value>",
    taxRateUuid: "123e4567-185e-4307-b648-231b2c340f8b",
    jobMaterialBundleUuid: "123e4567-a7cf-4c97-b5cd-231b2a195eeb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
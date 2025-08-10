# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-7ac5-4c40-9900-231b2659987b",
    jobUuid: "123e4567-8af3-4b8b-a38b-231b2f0efbeb",
    materialUuid: "123e4567-ed0f-49fc-8f0e-231b2940e0bb",
    quantity: "<value>",
    taxRateUuid: "123e4567-6b55-4128-b1ba-231b22a7101b",
    jobMaterialBundleUuid: "123e4567-fc35-411c-911a-231b2050bb4b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
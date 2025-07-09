# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-85bb-45fc-80e6-22fb2b23096b",
    jobUuid: "123e4567-cc12-4125-9b74-22fb2080b6ab",
    materialUuid: "123e4567-709b-46e9-ae4d-22fb238279bb",
    quantity: "<value>",
    taxRateUuid: "123e4567-3cf7-4ba6-8cfe-22fb2be4175b",
    jobMaterialBundleUuid: "123e4567-02c7-4c97-8743-22fb2b75143b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
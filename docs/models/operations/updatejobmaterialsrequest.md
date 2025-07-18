# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-c7f1-4ea4-84ed-2302ffb3987b",
    jobUuid: "123e4567-e8da-48cb-93df-2302f9b1910b",
    materialUuid: "123e4567-0c42-4d98-91f6-2302fa6f274b",
    quantity: "<value>",
    taxRateUuid: "123e4567-df18-4693-a3db-2302f470a72b",
    jobMaterialBundleUuid: "123e4567-8d60-45fd-a234-2302f93707db",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
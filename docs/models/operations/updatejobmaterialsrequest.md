# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-5290-4ee6-a52b-22fd8a2e20fb",
    jobUuid: "123e4567-f617-47ca-90dd-22fd887ec26b",
    materialUuid: "123e4567-8151-4183-aefa-22fd8c44dcfb",
    quantity: "<value>",
    taxRateUuid: "123e4567-38b1-41d0-ad2c-22fd823d2ecb",
    jobMaterialBundleUuid: "123e4567-843f-44aa-9898-22fd8cc0977b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |
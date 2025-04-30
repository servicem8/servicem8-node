# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-9824-4488-b13c-22b56d30d40b",
    jobUuid: "123e4567-04af-4679-bf0b-22b565bf1cab",
    materialUuid: "123e4567-ab08-44de-9165-22b56e58a60b",
    quantity: "<value>",
    taxRateUuid: "123e4567-ad60-46d2-b156-22b56208751b",
    jobMaterialBundleUuid: "123e4567-7a1d-483b-aafe-22b56d220fcb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |